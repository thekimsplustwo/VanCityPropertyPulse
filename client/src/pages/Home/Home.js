import React, { useMemo, useState, useEffect } from 'react';
import { Button, Stack, styled as muiStyled } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import PropertyGrid from '../../components/Property/PropertyGrid';
import demoHouseImage from '../../assets/images/demoHouse.jpg';
import { getListAsync } from '../../redux/home/thunks';
import SearchComponent from '../../components/SearchOption/SearchComponent';
import { getLikesAsync } from '../../redux/likes/thunks';

function Home() {
  const [sortOrder, setSortOrder] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const properties = useSelector(state => state.home.list);
  const searchParams = useSelector(state => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLikesAsync());

    const filteredParams = Object.fromEntries(
      Object.entries(searchParams).filter(
        ([key, value]) =>
          (typeof value === 'string' && value.length > 0) ||
          (Array.isArray(value) && value.length > 0) ||
          (typeof value === 'number' && value > 0)
      )
    );

    const searchQuery = new URLSearchParams(filteredParams).toString();
    dispatch(getListAsync(filteredParams));
    if (searchQuery) {
      navigate(`${location.pathname}?${searchQuery}`);
    } else {
      navigate(`${location.pathname}`);
    }
  }, [dispatch, navigate, location.pathname, searchParams]);

  const sortedProperties = useMemo(() => {
    if (sortOrder === 'asc') {
      return [...properties].sort((a, b) => a.price - b.price);
    }

    if (sortOrder === 'desc') {
      return [...properties].sort((a, b) => b.price - a.price);
    }

    return properties;
  }, [sortOrder, properties]);

  const handleSortAscending = () => {
    setSortOrder('asc');
  };

  const handleSortDescending = () => {
    setSortOrder('desc');
  };

  return (
    <Main>
      <SearchComponent />
      <ButtonContainer direction="row" spacing={2}>
        <StyledButton variant="contained" onClick={handleSortAscending}>
          Sort by Price (Ascending)
        </StyledButton>
        <StyledButton variant="contained" onClick={handleSortDescending}>
          Sort by Price (Descending)
        </StyledButton>
      </ButtonContainer>
      <PropertyGrid properties={sortedProperties} showCompareButton={false} />
    </Main>
  );
}

const Main = styled.div`
  padding-top: 5em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledButton = muiStyled(Button)({
  color: 'black',
  fontWeight: 'bold',
  fontSize: '1rem',
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: 'pink',
  },
});

const ButtonContainer = muiStyled(Stack)({
  justifyContent: 'center',
  marginTop: '2rem',
});

export default Home;

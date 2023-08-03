import { useMemo, useState, useEffect } from 'react';
import { Button, Stack, styled as muiStyled } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import PropertyGrid from '../../components/Property/PropertyGrid';
import { getListAsync } from '../../redux/home/thunks';
import SearchComponent from '../../components/SearchOption/SearchComponent';
import { getLikesAsync } from '../../redux/likes/thunks';
import { setSearchParams } from '../../redux/search/reducer';

function Home() {
  const token = localStorage.getItem('token');
  const [sortOrder, setSortOrder] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const properties = useSelector(state => state.home.list);
  const searchParams = useSelector(state => state.search);
  const isLogin = useSelector(state => state.users.isLogin);
  const dispatch = useDispatch();

  const filterInitialState = state => {
    return Object.fromEntries(
      Object.entries(state).filter(
        ([key, value]) =>
          (typeof value === 'string' && value.length > 0) ||
          (Array.isArray(value) && value.length > 0) ||
          (typeof value === 'number' && value > 0)
      )
    );
  };

  useEffect(() => {
    if (!isLogin) {
      navigate('/', { replace: true });
    } else {
      const params = new URLSearchParams(location.search);
      const initialState = {
        location: params.get('location') || '',
        minPrice: params.get('minPrice')
          ? parseInt(params.get('minPrice'), 10)
          : '',
        maxPrice: params.get('maxPrice')
          ? parseInt(params.get('maxPrice'), 10)
          : '',
        bedsMin: params.get('bedsMin')
          ? parseInt(params.get('bedsMin'), 10)
          : '',
        home_type: params.get('home_type')
          ? params.get('home_type').split(',')
          : [],
        page: params.get('page') ? parseInt(params.get('page'), 10) : 1,
      };

      dispatch(setSearchParams(initialState));

      const filteredInitialState = filterInitialState(initialState);
      dispatch(getListAsync({ params: filteredInitialState, token }));
      dispatch(getLikesAsync(token));
    }
  }, [location.search, dispatch, isLogin]);

  useEffect(() => {
    if (searchClicked) {
      const filteredParams = filterInitialState(searchParams);
      const searchQuery = new URLSearchParams(filteredParams).toString();
      if (searchQuery) {
        navigate(`${location.pathname}?${searchQuery}`);
      } else {
        navigate(`${location.pathname}`);
      }
      dispatch(getListAsync({ params: searchParams, token }));
      setSearchClicked(false);
    }
  }, [
    location.pathname,
    searchClicked,
    searchParams,
    navigate,
    dispatch,
    isLogin,
  ]);

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
    setSelectedButton('asc');
  };

  const handleSortDescending = () => {
    setSortOrder('desc');
    setSelectedButton('desc');
  };

  const handleSearchClick = () => {
    setSearchClicked(true);
  };

  const handleReset = () => {
    window.location.href = '/home';
  };

  return (
    isLogin && (
      <Main>
        <SearchComponent />
        <ButtonContainer direction="row" spacing={2}>
          <StyledButton onClick={handleSearchClick}>Search</StyledButton>
          <StyledButton onClick={handleReset}>Reset</StyledButton>
        </ButtonContainer>
        <ButtonContainer direction="row" spacing={2}>
          <StyledButton
            variant={selectedButton === 'asc' ? 'contained' : null}
            onClick={handleSortAscending}
          >
            Sort by Price (Ascending)
          </StyledButton>
          <StyledButton
            variant={selectedButton === 'desc' ? 'contained' : null}
            onClick={handleSortDescending}
          >
            Sort by Price (Descending)
          </StyledButton>
        </ButtonContainer>
        <PropertyGrid
          properties={sortedProperties}
          showCompareButton={false}
          showHeartIcon
        />
      </Main>
    )
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
  backgroundColor: ({ variant }) =>
    variant === 'contained' ? 'white' : 'grey',
  '&:hover': {
    backgroundColor: 'pink',
  },
});

const ButtonContainer = muiStyled(Stack)({
  justifyContent: 'center',
  marginTop: '2rem',
});

export default Home;

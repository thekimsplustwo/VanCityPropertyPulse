import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import PropertyGrid from '../../components/Property/PropertyGrid';
import demoHouseImage from '../../assets/images/demoHouse.jpg';
import { getListAsync } from '../../redux/home/thunks';
import SearchComponent from '../../components/SearchOption/SearchComponent';
import { getLikesAsync } from '../../redux/likes/thunks';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const properties = useSelector(state => state.home.list);
  const searchParams = useSelector(state => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListAsync(searchParams));
    dispatch(getLikesAsync());

    const filteredParams = Object.fromEntries(
      Object.entries(searchParams).filter(
        ([key, value]) =>
          (typeof value === 'string' && value.length > 0) ||
          (Array.isArray(value) && value.length > 0) ||
          (typeof value === 'number' && value >= 0)
      )
    );

    const searchQuery = new URLSearchParams(filteredParams).toString();
    if (searchQuery) {
      navigate(`${location.pathname}?${searchQuery}`);
    } else {
      navigate(`${location.pathname}`);
    }
  }, [dispatch, navigate, location.pathname, searchParams]);

  return (
    <Main>
      <SearchComponent />
      <PropertyGrid properties={properties} />
    </Main>
  );
}

const Main = styled.div`
  padding-top: 5em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export default Home;

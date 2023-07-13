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

    const searchQuery = new URLSearchParams(searchParams).toString();
    navigate(`${location.pathname}?${searchQuery}`);
  }, [dispatch, navigate, location.pathname, searchParams]);

  return (
    <Main>
      <SearchComponent />
      <PropertyGrid properties={properties} showCompareButton={false} />
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

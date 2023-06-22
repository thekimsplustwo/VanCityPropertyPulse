import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import PropertyGrid from '../../components/Property/PropertyGrid';
import demoHouseImage from '../../assets/images/demoHouse.jpg';
import { getListAsync } from '../../redux/home/thunks';
import SearchComponent from '../../components/SearchOption/SearchComponent';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const properties = useSelector(state => state.home.list);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListAsync());
  }, [dispatch]);

  return (
    <Margin>
      <Main>
        <p>Liked Properties</p>
        <PropertyGrid properties={properties} />
      </Main>
    </Margin>
  );
}

const Main = styled.div`
  padding-top: 5em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Margin = styled.div`
  margin: 20px;
  font-family: arial, sans-serif;
  line-height: 30pt;
  text-align: center;
`;

export default Home;

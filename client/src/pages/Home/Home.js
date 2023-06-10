import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropertyGrid from '../../components/Property/PropertyGrid';
import demoHouseImage from '../../assets/images/demoHouse.jpg';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const properties = [
    {
      image: demoHouseImage,
      price: '1,000,000',
      city: 'Vancouver',
      neighborhood: 'Downtown',
    },
    {
      image: demoHouseImage,
      price: '2,000,000',
      city: 'Vancouver',
      neighborhood: 'West End',
    },
    {
      image: demoHouseImage,
      price: '2,000,000',
      city: 'Vancouver',
      neighborhood: 'West End',
    },
    // More properties...
  ];

  return (
    <Main>
      <PropertyGrid properties={properties} />
    </Main>
  );
}

const Main = styled.div`
  padding-top: 5em;
  width: 100vw;
  height: 100vh;
  display: flex;
`;
export default Home;

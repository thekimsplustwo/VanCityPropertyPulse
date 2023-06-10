import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DisplayCard from '../../components/Property/DisplayCard';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  return <DisplayCard />;
}

const Main = styled.div`
  padding-top: 5em;
  width: 100vw;
  height: 100vh;
  display: flex;
`;
export default Home;

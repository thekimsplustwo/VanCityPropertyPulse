import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CompareProps from '../../components/Compare/CompareProps';

function Compare() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Margin>
      <Main>
        <Header> Compare properties</Header>
        <CompareProps />
      </Main>
    </Margin>
  );
}

const Main = styled.div`
  padding-top: 5em;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Margin = styled.div`
  margin: 20px;
  font-family: arial, sans-serif;
  line-height: 30pt;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 1rem;
  text-align: left;
  margin-top: 1rem;
  margin-left: 1rem;
`;

export default Compare;

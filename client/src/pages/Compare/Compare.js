import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Compare() {
  const navigate = useNavigate();
  const location = useLocation();

  return <Main />;
}

const Main = styled.div``;

export default Compare;

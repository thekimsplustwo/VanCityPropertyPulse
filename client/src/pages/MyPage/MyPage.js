import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function MyPage() {
  const navigate = useNavigate();
  const location = useLocation();

  return <Main />;
}

const Main = styled.div``;

export default MyPage;

import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Likes() {
  const navigate = useNavigate();
  const location = useLocation();

  return <Wrapper />;
}
export default Likes;

const Wrapper = styled.div`
  padding-top: 6em;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-item: space-around;
`;

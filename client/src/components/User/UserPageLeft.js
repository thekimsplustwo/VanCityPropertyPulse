import React, { useEffect } from 'react';
import styled from 'styled-components';
// import Grid from '@mui/material/Unstable_Grid2';
import UserCard from './UserCard';
import UserInfo from './UserInfo';

function UserPageLeft() {
  return (
    <div>
      <Wrapper>
        <UserCard />
      </Wrapper>
      <Wrapper>
        <UserInfo />
      </Wrapper>
    </div>
  );
}

export default UserPageLeft;

const Wrapper = styled.div`
  border-radius: 15px;
  // border: 4px solid #b9bbb6;
  padding: 16px;
  width: 100%;
  margin: 20px;
  background-color: white;
  text-align: center;
`;

import React, { useEffect } from 'react';
import styled from 'styled-components';
// import Grid from '@mui/material/Unstable_Grid2';
import UserCard from './UserCard';
import UserInfo from './UserInfo';

function UserPageLeft({ user }) {
  return (
    <div>
      <Wrapper>
        <UserCard user={user} />
      </Wrapper>
      <Wrapper>
        <UserInfo user={user} />
      </Wrapper>
    </div>
  );
}

export default UserPageLeft;

const Wrapper = styled.div`
  border-radius: 15px;
  padding: 16px;
  width: 100%;
  margin: 20px;
  background-color: white;
  text-align: center;
  box-shadow: 10px 10px #fbe8e9;
`;

import React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { user } from '../../data/data';

function UserCard() {
  return (
    <Margin>
      <div>
        <ProfileImage src={user.photo} alt={user.firstName} />
        <p>
          Welcome, <Bold>{user.firstName}</Bold>!❤️
        </p>
      </div>
      <Button variant="outlined" color="error">
        LogOut
      </Button>
    </Margin>
  );
}

export default UserCard;

const Margin = styled.div`
  margin: 20px;
  font-family: arial, sans-serif;
  line-height: 30pt;
  text-align: center;
`;

const Bold = styled.b`
  font-weight: bold;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
`;

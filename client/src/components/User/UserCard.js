import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import styled from 'styled-components';

function UserCard() {
  const user = useSelector(state => state.users.user);
  return (
    <Margin>
      <div>
        <ProfileImage src={user.photo} alt={user.firstName} />
        <p>
          Welcome, <Bold>{user.firstName}</Bold>!❤️
        </p>
      </div>
      {/* TODO(JY): The user will be logged out when clicking this button */}
      <Button variant="outlined" color="error">
        LogOut
      </Button>
    </Margin>
  );
}

export default UserCard;

const Margin = styled.div`
  margin: 20px;
  height: 21vh;
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

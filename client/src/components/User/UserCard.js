import React from 'react';
import Button from '@mui/material/Button';
import { user } from '../../data/data';
import { Margin, Bold, ProfileImage } from '../../styles/UserProfile';

function UserCard() {
  //   const [{ photo, firstName }] = user;
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

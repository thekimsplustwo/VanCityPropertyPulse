import React from 'react';
import Button from '@mui/material/Button';
import dummy from './DummyUser';
import { Margin, Bold, ProfileImage } from '../../styles/UserProfile';

function UserCard() {
  //   const [{ photo, firstName }] = dummy;
  return (
    <Margin>
      <div>
        <ProfileImage src={dummy.photo} alt={dummy.firstName} />
        <p>
          Welcome, <Bold>{dummy.firstName}</Bold>!❤️
        </p>
      </div>
      <Button variant="outlined" color="error">
        LogOut
      </Button>
    </Margin>
  );
}

export default UserCard;

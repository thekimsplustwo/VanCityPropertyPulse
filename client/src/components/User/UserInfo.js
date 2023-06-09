import React from 'react';
import Button from '@mui/material/Button';
import { user } from '../../data/data';
import { Margin, Bold } from '../../styles/UserProfile';

function UserInfo() {
  return (
    <Margin>
      <p>
        <Bold>First Name: </Bold> {user.firstName}
      </p>
      <p>
        <Bold>Last Name: </Bold> {user.lastName}
      </p>
      <p>
        <Bold>Age: </Bold> {user.age}
      </p>
      <p>
        <Bold>Email: </Bold> {user.email}
      </p>
      <p>
        <Bold>Phone Number: </Bold> {user.phoneNum}
      </p>
      <p>
        <Bold>Region: </Bold> {user.region}
      </p>
      <Button variant="outlined">Edit Profile</Button>
    </Margin>
  );
}

export default UserInfo;

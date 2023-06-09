import React from 'react';
import Button from '@mui/material/Button';
import dummy from './DummyUser';
import { Margin, Bold } from '../../styles/UserProfile';

function UserInfo() {
  return (
    <Margin>
      <p>
        <Bold>First Name: </Bold> {dummy.firstName}
      </p>
      <p>
        <Bold>Last Name: </Bold> {dummy.lastName}
      </p>
      <p>
        <Bold>Age: </Bold> {dummy.age}
      </p>
      <p>
        <Bold>Email: </Bold> {dummy.email}
      </p>
      <p>
        <Bold>Phone Number: </Bold> {dummy.phoneNum}
      </p>
      <p>
        <Bold>Region: </Bold> {dummy.region}
      </p>
      <Button variant="outlined">Edit Profile</Button>
    </Margin>
  );
}

export default UserInfo;

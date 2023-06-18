import React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { user } from '../../data/data';

function UserInfo({ user }) {
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

const Margin = styled.div`
  margin: 20px;
  font-family: arial, sans-serif;
  line-height: 30pt;
  text-align: center;
`;

const Bold = styled.b`
  font-weight: bold;
`;

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import styled from 'styled-components';

function formatPhoneNumber(phoneNumber) {
  const areaCode = phoneNumber.slice(0, 3);
  const firstPart = phoneNumber.slice(3, 6);
  const secondPart = phoneNumber.slice(6);
  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

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
        <Bold>Phone Number: </Bold> {formatPhoneNumber(user.phoneNumber)}
      </p>
      <p>
        <Bold>Region: </Bold> {user.region}
      </p>
      <Link to="/edituser">
        <Button variant="outlined">Edit Profile</Button>
      </Link>
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

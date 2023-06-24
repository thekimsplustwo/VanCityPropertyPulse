import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import styled from 'styled-components';

function formatPhoneNumber(phoneNumber) {
  if (phoneNumber !== undefined) {
    const areaCode = phoneNumber.slice(0, 3);
    const firstPart = phoneNumber.slice(3, 6);
    const secondPart = phoneNumber.slice(6);
    return `(${areaCode}) ${firstPart}-${secondPart}`;
  }
  return phoneNumber;
}

function UserInfo({ setModal }) {
  const user = useSelector(state => state.users.user);
  return (
    <Margin>
      <Bold>First Name: </Bold> {user.firstName}
      <br />
      <Bold>Last Name: </Bold> {user.lastName}
      <br />
      <Bold>Age: </Bold> {user.age}
      <br />
      <Bold>Email: </Bold> {user.email}
      <br />
      <Bold>Phone Number: </Bold> {formatPhoneNumber(user.phoneNumber)}
      <br />
      <Bold>Region: </Bold> {user.region}
      <br />
      <Button variant="outlined" onClick={() => setModal(true)}>
        Edit Profile
      </Button>
    </Margin>
  );
}

export default UserInfo;

const Margin = styled.div`
  margin: 20px;
  height: 25vh;
  font-family: arial, sans-serif;
  line-height: 30pt;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Bold = styled.b`
  font-weight: bold;
`;

const ModalBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 99;
`;

const EditProfileButton = styled.div`
  border: solid 1px lightblue;
  font-size: 15px;
  font-weight: 600px;
  color: lightblue;
  opacity: 0.6;
  padding: 2px;
  &:hover {
    opacity: 1;
    cursor: pointer;
    font-size: 20px;
    font-weight: 800px;
  }
  z-index: 99;
`;

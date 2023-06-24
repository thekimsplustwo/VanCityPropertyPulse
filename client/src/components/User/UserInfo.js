import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import styled from 'styled-components';

function formatPhoneNumber(phoneNumber) {
  const areaCode = phoneNumber.slice(0, 3);
  const firstPart = phoneNumber.slice(3, 6);
  const secondPart = phoneNumber.slice(6);
  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

function UserInfo({ setModal }) {
  const user = useSelector(state => state.users.list);
  return (
    <Margin>
      <Bold>First Name: </Bold> {user.firstName}
      <Bold>Last Name: </Bold> {user.lastName}
      <Bold>Age: </Bold> {user.age}
      <Bold>Email: </Bold> {user.email}
      <Bold>Phone Number: </Bold> {user.phoneNumber}
      <Bold>Region: </Bold> {user.region}
      <EditProfileButton onClick={() => setModal(true)}>
        Edit Profile
      </EditProfileButton>
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

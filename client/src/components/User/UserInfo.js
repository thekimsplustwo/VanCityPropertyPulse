import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import EditUser from '../../pages/EditUser/EditUser';

function formatPhoneNumber(phoneNumber) {
  const areaCode = phoneNumber.slice(0, 3);
  const firstPart = phoneNumber.slice(3, 6);
  const secondPart = phoneNumber.slice(6);
  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

function UserInfo() {
  const user = useSelector(state => state.users.list);

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
        {/* <Bold>Phone Number: </Bold> {formatPhoneNumber(user.phoneNumber)} */}
        <Bold>Phone Number: </Bold> {user.phoneNumber}
      </p>
      <p>
        <Bold>Region: </Bold> {user.region}
      </p>
      <EditUser />
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

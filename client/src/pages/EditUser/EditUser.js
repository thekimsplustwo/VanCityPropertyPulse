import React from 'react';
import styled from 'styled-components';
import UserProfileEdit from '../../components/User/UserProfileEdit';
import { tempUserProfile } from '../../data/tempUserProfile';

function EditUser() {
  // const user = tempUserProfile;
  return (
    <Main>
      {/* <UserProfileEdit user={user} /> */}
      <UserProfileEdit />
    </Main>
  );
}

const Main = styled.div`
  margin-top: 2em;
  margin-left: 2em;
  padding-top: 5em;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export default EditUser;

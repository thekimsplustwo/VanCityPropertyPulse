import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import styled from 'styled-components';

function Login() {
  const responseMessage = response => {
    console.log(response);
  };
  const errorMessage = error => {
    console.log(error);
  };
  return (
    <Main>
      <GoogleLogin
        theme="filled_blue"
        shape="pill"
        width="250px"
        context="signin"
        onSuccess={responseMessage}
        onError={errorMessage}
      />
    </Main>
  );
}
export default Login;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

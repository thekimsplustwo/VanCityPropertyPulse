import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import styled from 'styled-components';
import {
  getUserAsync,
  loginAsync,
  signupAsync,
} from '../../redux/users/thunks';

function Login() {
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: codeResponse => {
      setUser(codeResponse);
    },
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json',
            },
          }
        )
        .then(res => {
          const USER_EMAIL = res.data.email;
          if (!dispatch(getUserAsync(USER_EMAIL))) {
            dispatch(signupAsync(USER_EMAIL));
            console.log('Signup successful!');
          } else {
            dispatch(loginAsync(USER_EMAIL));
            console.log('Login successful!');
          }
        })
        .catch(err => console.error(err));
    }
  }, [user]);

  return (
    <Main>
      <GoogleLogin
        shape="pill"
        width="250px"
        context="signin"
        text="signin_with"
        onSuccess={login}
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

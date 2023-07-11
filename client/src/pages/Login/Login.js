import styled from 'styled-components';

function Login() {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:10010/users/google';
  };

  // const login = useGoogleLogin({
  //   onSuccess: setUser,
  //   // onError: console.error('Unable to login via Google'),
  // });

  // useEffect(() => {
  //   removeAccessToken();
  //   removeLoggedEmail();
  //   if (user) {
  //     axios
  //       .get(
  //         `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${user.access_token}`,
  //             Accept: 'application/json',
  //           },
  //         }
  //       )
  //       .then(res => {
  //         saveAccessToken(user.access_token);
  //         const USER_EMAIL = res.data.email;
  //         if (!dispatch(getUserAsync(USER_EMAIL))) {
  //           dispatch(signupAsync(USER_EMAIL));
  //           console.log('Signup successful!');
  //         } else {
  //           dispatch(loginAsync(USER_EMAIL));
  //           console.log('Login successful!');
  //           navigate('/mypage');
  //         }
  //       })
  //       .catch(err => console.error(err));
  //   }
  // }, [user]);

  return (
    <Main>
      <LoginButton type="button" onClick={handleGoogleLogin}>
        Sign in with Google 🚀
      </LoginButton>
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

const LoginButton = styled.button`
  width: 250px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
`;

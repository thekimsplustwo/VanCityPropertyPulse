import styled from 'styled-components';

function Login() {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:10010/users/google';
  };

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

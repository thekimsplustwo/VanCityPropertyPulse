import styled from 'styled-components';
import searchImage from '../../assets/images/searchComponent.jpg';
import { GOOGLE_LOGIN_REQUEST_URL } from '../../config';

const loginURL = GOOGLE_LOGIN_REQUEST_URL;
function Login() {
  const handleGoogleLogin = () => {
    window.location.href = loginURL;
  };

  return (
    <Main>
      <Container>
        <Title>Vancity Property Pulse</Title>
        <LoginButton type="button" onClick={handleGoogleLogin} />
      </Container>
    </Main>
  );
}
export default Login;

const sizes = {
  desktop: 1080,
  tablet: 768,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = `@media (max-width: ${sizes[label]}px)`;

  return acc;
}, {});

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: url(${searchImage}) no-repeat center center;
  background-size: 80% 65%;
  position: relative;

  ${media.desktop} {
    background-size: 70% 50%;
  }
  ${media.tablet} {
    background-size: 60% 40%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 4rem;
  margin-bottom: 1rem;
  position: absolute;
  top: 30%;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

const LoginButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background: url('/images/google/btn_google_signin_dark_normal_web@2x.png');
  background-size: 100% 100%;
  border: none;
  position: absolute;
  top: 45%;
  &:hover {
    cursor: pointer;
  }
  z-index: 2;
`;

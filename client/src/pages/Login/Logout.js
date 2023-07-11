import { googleLogout } from '@react-oauth/google';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeAccessToken, removeLoggedEmail } from '../../utils/storage';
import { logoutAsync } from '../../redux/users/thunks';

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    // googleLogout();
    // removeAccessToken();
    // removeLoggedEmail();
    // navigate('/home');
    // window.location.href = 'https://accounts.google.com/logout';
    dispatch(logoutAsync());
  };

  return (
    <Main>
      <LogoutButton type="button" onClick={() => logout()}>
        Sign out 👋
      </LogoutButton>
    </Main>
  );
}
export default Logout;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const LogoutButton = styled.button`
  width: 250px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
`;

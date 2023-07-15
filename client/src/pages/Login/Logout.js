import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getAccessToken } from '../../utils/storage';
import { logoutAsync } from '../../redux/users/thunks';

function Logout() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAsync());
    window.location.href = 'http://localhost:3000/home';
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

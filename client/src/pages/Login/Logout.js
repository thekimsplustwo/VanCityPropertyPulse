import { googleLogout } from '@react-oauth/google';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { removeAccessToken, removeLoggedEmail } from '../../utils/storage';

function Logout() {
  const navigate = useNavigate();

  const logout = () => {
    googleLogout();
    removeAccessToken();
    removeLoggedEmail();
    navigate('/home');
  };

  return (
    <Main>
      <button type="button" onClick={() => logout()}>
        Sign out 👋
      </button>
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

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../../utils/storage';
import { logoutAsync } from '../../redux/users/thunks';
import { resetUserState } from '../../redux/users/reducer';
import { resetListState } from '../../redux/home/reducer';

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToHome = () => {
    navigate('/');
  };

  const logout = () => {
    dispatch(logoutAsync());
    dispatch(resetUserState());
    dispatch(resetListState());
    navigateToHome();
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

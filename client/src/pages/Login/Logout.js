import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { googleLogoutAsync } from '../../redux/users/thunks';
import { resetUserState } from '../../redux/users/reducer';
import { resetListState } from '../../redux/home/reducer';
import { resetLikesState } from '../../redux/likes/reducer';

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToHome = () => {
    navigate('/');
  };

  const logout = () => {
    dispatch(googleLogoutAsync());
    dispatch(resetUserState());
    dispatch(resetListState());
    dispatch(resetLikesState());
    navigateToHome();
    alert('You have successfully logged out.');
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

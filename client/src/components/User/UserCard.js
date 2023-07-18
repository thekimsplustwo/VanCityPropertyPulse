import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { logoutAsync } from '../../redux/users/thunks';
import { resetUserState } from '../../redux/users/reducer';
import { resetListState } from '../../redux/home/reducer';

function UserCard() {
  const navigate = useNavigate();
  const user = useSelector(state => state.users.user);
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
    <Margin>
      <div>
        <ProfileImage src={user.photo} alt={user.firstName} />
        <p>
          Welcome, <Bold>{user.firstName}</Bold>!❤️
        </p>
      </div>
      <Button variant="outlined" color="error" onClick={() => logout()}>
        LogOut
      </Button>
    </Margin>
  );
}

export default UserCard;

const Margin = styled.div`
  margin: 20px;
  font-family: arial, sans-serif;
  line-height: 30pt;
  text-align: center;
`;

const Bold = styled.b`
  font-weight: bold;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
`;

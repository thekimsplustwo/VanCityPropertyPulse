import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { googleLogoutAsync } from '../../redux/users/thunks';
import { resetUserState } from '../../redux/users/reducer';
import { resetListState } from '../../redux/home/reducer';
import { resetLikesState } from '../../redux/likes/reducer';

function UserCard() {
  const token = localStorage.getItem('token');
  const user = useSelector(state => state.users.user);
  const defaultPhoto =
    'https://static.wikia.nocookie.net/muppet/images/6/6e/Ji-Young.jpg/';

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToLogin = () => {
    navigate('/');
  };

  const logout = () => {
    dispatch(googleLogoutAsync(token));
    dispatch(resetUserState());
    dispatch(resetListState());
    dispatch(resetLikesState());
    navigateToLogin();
  };

  return (
    <Margin>
      <div>
        <ProfileImage src={user.photo || defaultPhoto} alt={user.firstName} />
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
  line-height: 30pt;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Bold = styled.b`
  font-weight: bold;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
`;

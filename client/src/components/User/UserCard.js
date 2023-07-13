import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { logoutAsync } from '../../redux/users/thunks';
import { getAccessToken } from '../../utils/storage';

function UserCard() {
  const user = useSelector(state => state.users.user);
  const dispatch = useDispatch();
  const token = getAccessToken();

  const logout = token => {
    dispatch(logoutAsync(token));
  };

  return (
    <Margin>
      <div>
        <ProfileImage src={user.photo} alt={user.firstName} />
        <p>
          Welcome, <Bold>{user.firstName}</Bold>!❤️
        </p>
      </div>
      <Button variant="outlined" color="error" onClick={() => logout(token)}>
        LogOut
      </Button>
    </Margin>
  );
}

export default UserCard;

const Margin = styled.div`
  margin: 20px;
  height: 21vh;
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

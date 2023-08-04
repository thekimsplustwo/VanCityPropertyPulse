import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { getUserAsync } from '../../redux/users/thunks';
import UserPageLeft from '../../components/User/UserPageLeft';
import MoreOptions from '../../components/User/MoreOptions';
import UserProfileEdit from '../../components/User/UserProfileEdit';
import NearbyMe from '../../components/User/NearbyMe';

function MyPage() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.users.isLogin);
  const navigateToLogin = () => {
    navigate('/');
  };

  useEffect(() => {
    if (!isLogin) {
      navigateToLogin();
    } else {
      dispatch(getUserAsync(token));
    }
  }, [dispatch, isLogin]);

  const user = useSelector(state => state.users.user);
  const { region } = user;

  return (
    isLogin && (
      <Main>
        {modal && <UserProfileEdit setModal={setModal} />}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            paddingTop: '5em',
          }}
        >
          <Grid container spacing={4}>
            <Grid item="true" xs={4}>
              <UserPageLeft setModal={setModal} />
            </Grid>
            <Grid item="true" xs={7.7}>
              <MoreOptions />
            </Grid>
          </Grid>
        </Box>
        <NearbyMe region={region} />
      </Main>
    )
  );
}

export default MyPage;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
`;

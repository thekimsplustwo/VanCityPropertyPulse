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

function MyPage() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.users.isLogin);
  useEffect(() => {
    if (!isLogin) {
      navigate('/');
    } else {
      dispatch(getUserAsync());
    }
  }, [dispatch, isLogin]);
  return (
    isLogin && (
      <Main>
        {modal && <UserProfileEdit setModal={setModal} />}
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            paddingTop: '5em',
          }}
        >
          <Grid container spacing={4}>
            <Grid item="true" xs={4}>
              <UserPageLeft modal={modal} setModal={setModal} />
            </Grid>
            <Grid item="true" xs={7.7}>
              <MoreOptions />
            </Grid>
          </Grid>
        </Box>
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

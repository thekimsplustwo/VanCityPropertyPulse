import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { getUserAsync } from '../../redux/users/thunks';
import UserPageLeft from '../../components/User/UserPageLeft';
import MoreOptions from '../../components/User/MoreOptions';
import UserProfileEdit from '../../components/User/UserProfileEdit';

const USER_EMAIL = 'johndoe@gmail.com';

function MyPage() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAsync(USER_EMAIL));
  }, [dispatch]);

  return (
    <Main>
      {modal && <UserProfileEdit setModal={setModal} />}

      <Box
        sx={{
          width: '100vw',
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

const Wrapper = styled.div`
  border-radius: 15px;
  padding: 16px;
  width: 100%;
  margin: 20px;
  background-color: white;
  text-align: center;
  box-shadow: 10px 10px #fbe8e9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const CenteredGrid = styled(Grid)`
  border-radius: 15px;
  width: 80%;
  height: 15vh;
  --Grid-borderWidth: 2px;
  border: var(--Grid-borderWidth) solid #f8c9cd;
  background-color: #feedef;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

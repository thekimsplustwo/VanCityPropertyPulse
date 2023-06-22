import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ImageList from '@mui/material/ImageList';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import UserCard from '../../components/User/UserCard';
import UserFavourites from '../../components/User/UserFavourites';
import UserInfo from '../../components/User/UserInfo';
import { getUserAsync } from '../../redux/users/thunks';
import UserPageLeft from '../../components/User/UserPageLeft';
import { tempUserProfile } from '../../data/tempUserProfile';
import { useUser } from '../../components/User/UserProvider';

const USER_EMAIL = 'johndoe@gmail.com';

function MyPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // const user = useSelector(state => state.users.list);
  // const user = tempUserProfile;
  const { user } = useUser();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAsync(USER_EMAIL));
  }, [dispatch]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Main>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          paddingTop: '5em',
        }}
      >
        <Grid container spacing={4}>
          <Grid item="true" xs={4}>
            <UserPageLeft user={user} />
          </Grid>
          <Grid item="true" xs={7.7}>
            <Wrapper>
              <ImageList cols={3}>
                <UserFavourites />
              </ImageList>
            </Wrapper>
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
`;

import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ImageList from '@mui/material/ImageList';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import UserCard from '../../components/User/UserCard';
import UserFavourites from '../../components/User/UserFavourites';
import UserInfo from '../../components/User/UserInfo';
import UserPageLeft from '../../components/User/UserPageLeft';

function MyPage() {
  const navigate = useNavigate();
  const location = useLocation();

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
          height: '100vh',
          width: '100vw',
          paddingTop: '8em',
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <UserPageLeft />
          </Grid>
          <Grid item xs={7.7}>
            <Wrapper>
              <ImageList cols="3">
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
  height: 100vh;
  width: 100vw;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  border-radius: 15px;
  // border: 4px solid #b9bbb6;
  padding: 16px;
  width: 100%;
  margin: 20px;
  background-color: white;
  text-align: center;
`;

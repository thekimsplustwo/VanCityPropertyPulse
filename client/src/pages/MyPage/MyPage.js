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
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        paddingTop: '8em',
      }}
    >
      <Grid container spacing={8}>
        <Grid>
          <div style={{ flexDirection: 'column' }}>
            <Wrapper>
              <UserCard />
            </Wrapper>
            <Wrapper>
              <UserInfo />
            </Wrapper>
          </div>
        </Grid>
        <Grid xs={7}>
          <Wrapper>
            <ImageList cols="3">
              <UserFavourites />
            </ImageList>
          </Wrapper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MyPage;

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  border-radius: 25px;
  border: 4px solid black;
  padding: 16px;
  width: 100%;
  margin: 10px;
  background-color: white;
  text-align: center;
`;

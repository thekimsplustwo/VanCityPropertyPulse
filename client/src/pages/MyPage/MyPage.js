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
import { Wrapper } from '../../styles/UserProfile';

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
      <Box>
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
    </Main>
  );
}

const Main = styled.div`
  padding-top: 8em;
  width: 100vw,
  height: 100vh,
  display: flex;
  flex-direction: column;
`;

export default MyPage;

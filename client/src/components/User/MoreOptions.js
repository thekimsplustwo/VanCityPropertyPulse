import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Stack, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { getUserAsync } from '../../redux/users/thunks';
import { themeColorPurple } from '../../styles/theme';

function MoreOptions() {
  return (
    <Wrapper>
      <Box sx={{ width: '100%' }}>
        <Stack justifyContent="center" alignItems="center">
          <CenteredGrid>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 630,
                letterSpacing: '.3rem',
                color: themeColorPurple,
                textDecoration: 'none',
                fontSize: '1.1rem',
              }}
            >
              Search Available Properties
            </Typography>
          </CenteredGrid>
          <CenteredGrid>
            <Typography
              variant="h5"
              noWrap
              component="a"
              // href="/home"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 630,
                letterSpacing: '.3rem',
                color: themeColorPurple,
                textDecoration: 'none',
                fontSize: '1.1rem',
              }}
            >
              List Your Property
            </Typography>
          </CenteredGrid>
          <CenteredGrid>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/likes"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 630,
                letterSpacing: '.3rem',
                color: themeColorPurple,
                textDecoration: 'none',
                fontSize: '1.1rem',
              }}
            >
              View Your Favourite Properties
            </Typography>
          </CenteredGrid>
        </Stack>
      </Box>
    </Wrapper>
  );
}

export default MoreOptions;

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

import styled from 'styled-components';
import { Stack, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
import { themeColorPurple } from '../../styles/theme';

function MoreOptions() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/home');
  };

  const navigateToLike = () => {
    navigate('/likes');
  };

  const navigateToCompare = () => {
    //navigate('/compare');
  };

  return (
    <Wrapper>
      <Box sx={{ width: '100%' }}>
        <Stack justifyContent="center" alignItems="center">
          <CenteredGrid>
            <Typography
              variant="h5"
              noWrap
              component="a"
              onClick={navigateToHome}
              sx={{
                mr: 2,
                fontWeight: 600,
                letterSpacing: '.2rem',
                color: themeColorPurple,
                textDecoration: 'none',
                fontSize: { xs: '0.8rem', sm: '1.1rem' },
                '&:hover': {
                  cursor: 'pointer',
                },
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
              onClick={navigateToCompare}
              sx={{
                mr: 2,
                fontWeight: 600,
                letterSpacing: '.2rem',
                color: themeColorPurple,
                textDecoration: 'none',
                fontSize: { xs: '0.8rem', sm: '1.1rem' },
                '&:hover': {
                  cursor: 'pointer',
                },
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
              onClick={navigateToLike}
              sx={{
                mr: 2,
                fontWeight: 600,
                letterSpacing: '.2rem',
                color: themeColorPurple,
                textDecoration: 'none',
                fontSize: { xs: '0.8rem', sm: '1.1rem' },
                '&:hover': {
                  cursor: 'pointer',
                },
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

const Wrapper = styled.div`
  border-radius: 15px;
  padding: 16px;
  width: 100%;
  background-color: white;
  text-align: center;
  box-shadow: 10px 10px #fbe8e9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CenteredGrid = styled(Grid)`
  border-radius: 15px;
  width: 80%;
  height: 10vh;
  --Grid-borderWidth: 2px;
  border: var(--Grid-borderWidth) solid #f8c9cd;
  background-color: #feedef;
  margin-top: 35px;
  margin-bottom: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    height: 6vh;
  }
`;

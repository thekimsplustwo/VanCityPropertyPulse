import styled from 'styled-components';
import { Stack, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CenteredGrid from './CenteredGrid';

function MoreOptions() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/home');
  };

  const navigateToLike = () => {
    navigate('/likes');
  };

  const navigateToCompare = () => {
    navigate('/compare');
  };

  return (
    <Wrapper>
      <Box sx={{ width: '100%' }}>
        <Stack justifyContent="center" alignItems="center">
          <CenteredGrid
            onClick={navigateToHome}
            text="Search for Available Properties"
          />
          <CenteredGrid
            onClick={navigateToLike}
            text="View Your Favourite Properties"
          />
          <CenteredGrid
            onClick={navigateToCompare}
            text="Compare Your Favourite Properties"
          />
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

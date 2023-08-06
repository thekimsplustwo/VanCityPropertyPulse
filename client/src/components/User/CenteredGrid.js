import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { themeColorPurple } from '../../styles/theme';

function CenteredGrid({ text, onClick }) {
  return (
    <StyledGrid onClick={onClick}>
      <Typography
        variant="h5"
        noWrap
        component="a"
        onClick={onClick}
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
        {text}
      </Typography>
    </StyledGrid>
  );
}

export default CenteredGrid;

const StyledGrid = styled(Grid)`
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

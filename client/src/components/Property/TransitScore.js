import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled as muiStyled } from '@mui/material/styles';

function TransitScore({ score, label, description }) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1em',
        marginLeft: '2em',
        marginBottom: '2em',
      }}
    >
      <CircularProgress
        variant="determinate"
        value={score}
        size={200}
        thickness={5}
      />

      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ProgressLabel variant="caption" component="div">
          {`${Math.round(score)} ${label}`}
        </ProgressLabel>
        <ProgressDescription variant="caption" component="div">
          {description}
        </ProgressDescription>
      </Box>
    </Box>
  );
}

const ProgressLabel = muiStyled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '1rem',
  fontWeight: 'bold',
}));

const ProgressDescription = muiStyled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
}));

export default TransitScore;

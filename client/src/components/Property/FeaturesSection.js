import {
  Chip,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  styled as muiStyled,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FeaturesSection({ title, features }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <StyledTypography>{title}</StyledTypography>
      </AccordionSummary>
      <AccordionDetails>
        {features.map((feature, index) => (
          <Chip
            label={feature}
            key={index}
            variant="outlined"
            style={{ margin: '0.5rem', fontSize: '0.9rem' }}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

export default FeaturesSection;

const StyledTypography = muiStyled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: '1.3rem',
}));

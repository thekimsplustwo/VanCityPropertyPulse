import {
  Card,
  CardContent,
  Typography,
  Link,
  Button,
  styled as muiStyled,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import StarRateIcon from '@mui/icons-material/StarRate';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function SchoolCard({ school }) {
  return (
    <StyledCard sx={{ minWidth: 275, marginBottom: '1em' }}>
      <CardContent>
        <Link href={school.link} underline="none">
          <Button variant="outlined" startIcon={<SchoolIcon />}>
            <StyledTypography variant="h5" component="div">
              {school.name}
            </StyledTypography>
          </Button>
        </Link>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {school.type} - {school.level}
        </Typography>
        <StyledRatingTypography variant="body2">
          Grades: {school.grades}
          <br />
          <StarRateIcon color="primary" /> Rating:{' '}
          {school.rating || 'No rating available'}
          <br />
          <LocationOnIcon color="error" /> Distance: {school.distance}km
        </StyledRatingTypography>
      </CardContent>
    </StyledCard>
  );
}

export default SchoolCard;

const StyledTypography = muiStyled(Typography)(() => ({
  color: 'black',
}));

const StyledCard = muiStyled(Card)(() => ({
  minWidth: 275,
  marginBottom: '1em',
  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
}));

const StyledRatingTypography = muiStyled(Typography)(() => ({
  color: 'black',
}));

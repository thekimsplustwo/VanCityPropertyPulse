import styled, { ThemeProvider } from 'styled-components';
import CropFreeRoundedIcon from '@mui/icons-material/CropFreeRounded';
import Divider from '@mui/material/Divider';
import { Typography, createTheme } from '@mui/material';
import BathtubIcon from '@mui/icons-material/Bathtub';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import HotelIcon from '@mui/icons-material/Hotel';
import PaidIcon from '@mui/icons-material/Paid';
import StoreIcon from '@mui/icons-material/Store';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Grid from '@mui/material/Grid';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Container from '@mui/material/Container';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { baseInfoRowStyles } from '../../styles/theme';

function InfoRowComponent({ icon, label, value, unit }) {
  const StyledIcon = icon;

  return (
    <InfoRow>
      <StyledIcon
        style={{ marginBottom: '-5px' }}
        sx={{
          color: '#ff385c',
          opacity: '0.7',
          padding: '0.3rem',
          fontSize: '2rem',
          marginRight: '1rem',
          '@media (max-width: 600px)': {
            fontSize: '1.5rem',
            marginRight: '0',
          },
        }}
      />
      <Bold>{label}: </Bold> {value || 'N/A'} {value && unit ? unit : ''}
    </InfoRow>
  );
}

function DetailedInfo({ propertyDetails }) {
  const {
    homeType,
    yearBuilt,
    livingArea,
    pricePerSquareFoot,
    monthlyHoaFee,
    datePosted,
    annualHomeownersInsurance,
    homeStatus,
    hasGarage,
    bathrooms,
    bedrooms,
    description,
  } = propertyDetails;

  return (
    <Container
      maxWidth="xl"
      style={{ marginTop: '0rem', marginBottom: '7rem' }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          paddingTop: '5em',
        }}
      >
        <Wrapper>
          <Grid container spacing={20} wrap="nowrap">
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  textAlign: 'left',
                  marginBottom: '2rem',
                  marginRight: '-5rem',
                }}
              >
                <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                  <InfoRowComponent
                    icon={HomeRoundedIcon}
                    label="Home Type"
                    value={homeType}
                  />
                  <InfoRowComponent
                    icon={EventAvailableRoundedIcon}
                    label="Year Built"
                    value={yearBuilt}
                  />
                  <InfoRowComponent
                    icon={AutoAwesomeIcon}
                    label="House Age"
                    value={new Date().getFullYear() - yearBuilt}
                    unit="year"
                  />
                  <InfoRowComponent
                    icon={CropFreeRoundedIcon}
                    label="Living Area"
                    value={livingArea}
                    unit="sqft"
                  />
                  {pricePerSquareFoot && (
                    <InfoRowComponent
                      icon={PaidIcon}
                      label="Price Per sqft"
                      value={pricePerSquareFoot}
                      unit="CAD"
                    />
                  )}
                  {monthlyHoaFee && (
                    <InfoRowComponent
                      icon={PaidIcon}
                      label="Strata Fee"
                      value={monthlyHoaFee}
                      unit="CAD"
                    />
                  )}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  textAlign: 'left',
                  marginBottom: '2rem',
                  marginLeft: '-5em',
                }}
              >
                <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                  <InfoRowComponent
                    icon={CalendarMonthIcon}
                    label="Date Posted"
                    value={datePosted}
                  />
                  <InfoRowComponent
                    icon={PaidIcon}
                    label="Home Insurance"
                    value={annualHomeownersInsurance}
                    unit="CAD"
                  />
                  <InfoRowComponent
                    icon={LocalParkingIcon}
                    label="Garage"
                    value={hasGarage === true ? 'Yes' : 'No'}
                  />
                  <InfoRowComponent
                    icon={BathtubIcon}
                    label="Bathrooms"
                    value={bathrooms}
                  />
                  <InfoRowComponent
                    icon={HotelIcon}
                    label="Bedrooms"
                    value={bedrooms}
                  />
                  <InfoRowComponent
                    icon={StoreIcon}
                    label="Home Status"
                    value={homeStatus}
                  />
                </Typography>
              </div>
            </Grid>
          </Grid>

          <Divider sx={{ borderBottomWidth: 3 }} />
          <div
            id="bodydesc"
            style={{
              textAlign: 'left',
              marginBottom: '3rem',
              marginTop: '3rem',
              overflow: 'auto',
              maxHeight: '300px',
            }}
          >
            <StyledText>
              <InfoRow>
                <BoldHeader>Overview </BoldHeader>
                <DescriptionWrapper>{description}</DescriptionWrapper>
              </InfoRow>
            </StyledText>
          </div>
        </Wrapper>
      </Box>
    </Container>
  );
}

export default DetailedInfo;

const InfoRow = styled.p`
  margin-bottom: 10px;
  ${baseInfoRowStyles}
  letter-spacing: 0.08em;
  @media (max-width: 600px) {
    font-size: 0.8rem;
    margin-left: 0;
    letter-spacing: 0.001rem;
  }
`;

const StyledText = styled.p`
  font-size: 17px;
  line-height: 1.5;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  border-radius: 15px;
  padding: 16px;
  width: 100%;
  background-color: white;
  text-align: center;
  box-shadow: 10px 10px #fbe8e9;

  @media (max-width: 600px) {
    width: 95%;
  }
`;

const Bold = styled.b`
  font-weight: bold;
  margin-top: 30px;
  @media (max-width: 600px) {
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

const BoldHeader = styled.h2`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: "#f5f5f5"";
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 10px 10px #fbe8e9;
`;

const DescriptionWrapper = styled.div`
  letter-spacing: 0.1em;
  word-spacing: 0.2em;
  line-height: 2.1em;
`;

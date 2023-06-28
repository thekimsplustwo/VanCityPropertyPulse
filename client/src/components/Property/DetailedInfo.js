import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import Button from '@mui/material/Button';
import CropFreeRoundedIcon from '@mui/icons-material/CropFreeRounded';
import { Info, ArrowForward, Store } from '@mui/icons-material';
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

function DetailedInfo({ propertyDetails }) {
  // decompose props
  const cssStyle = {
    padding: '20px',
  };
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
          <Grid container spacing={20}>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  textAlign: 'left',
                  marginBottom: '2rem',
                  marginRight: '-5rem',
                }}
              >
                <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                  <InfoRow>
                    <HomeRoundedIcon
                      style={{ marginBottom: '-5px' }}
                      sx={{ color: '#ff385c' }}
                    />
                    <Bold>Home Type: </Bold> {homeType}
                  </InfoRow>
                  <InfoRow>
                    <EventAvailableRoundedIcon
                      style={{ marginBottom: '-5px' }}
                      sx={{ color: '#ff385c' }}
                    />
                    <Bold>Year Built: </Bold> {yearBuilt}
                  </InfoRow>
                  <InfoRow>
                    <AutoAwesomeIcon
                      style={{ marginBottom: '-5px' }}
                      sx={{ color: '#ff385c' }}
                    />
                    <Bold> House Age: </Bold>
                    {new Date().getFullYear() - yearBuilt}
                  </InfoRow>
                  <InfoRow>
                    <CropFreeRoundedIcon
                      style={{ marginBottom: '-5px' }}
                      sx={{ color: '#ff385c' }}
                    />
                    <Bold>Living Area: </Bold> {livingArea} sqft
                  </InfoRow>
                  <InfoRow>
                    <PaidIcon
                      style={{ marginBottom: '-5px' }}
                      sx={{ color: '#ff385c' }}
                    />
                    <Bold>Price Per sqft: </Bold> {pricePerSquareFoot} CAD
                  </InfoRow>
                  <InfoRow>
                    <PaidIcon
                      style={{ marginBottom: '-5px' }}
                      sx={{ color: '#ff385c' }}
                    />
                    <Bold>Strata Fee: </Bold> {monthlyHoaFee} CAD
                  </InfoRow>
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
                  <InfoRow>
                    <CalendarMonthIcon
                      style={{ marginBottom: '-5px' }}
                      sx={{ color: '#ff385c' }}
                    />
                    <Bold>Date Posted: </Bold> {datePosted}
                  </InfoRow>
                  <InfoRow>
                    <PaidIcon
                      style={{ marginBottom: '-5px' }}
                      sx={{ color: '#ff385c' }}
                    />
                    <Bold>Home Insurance: </Bold> {annualHomeownersInsurance}{' '}
                    CAD
                  </InfoRow>

                  <InfoRow>
                    <LocalParkingIcon
                      style={{ marginBottom: '-5px' }}
                      sx={{ color: '#ff385c' }}
                    />
                    <Bold>Garage: </Bold> {hasGarage === true ? 'Yes' : 'No'}
                  </InfoRow>
                  <InfoRow>
                    <BathtubIcon
                      style={{ marginBottom: '-5px' }}
                      sx={{ color: '#ff385c' }}
                    />
                    <Bold>Bathrooms: </Bold> {bathrooms}
                  </InfoRow>
                  <InfoRow>
                    <HotelIcon
                      style={{ marginBottom: '-5px' }}
                      sx={{ color: '#ff385c' }}
                    />
                    <Bold> Bedrooms: </Bold> {bedrooms}
                  </InfoRow>
                  <InfoRow>
                    <StoreIcon
                      style={{ marginBottom: '-5px' }}
                      sx={{ color: '#ff385c' }}
                    />
                    <Bold>Home Status: </Bold> {homeStatus}
                  </InfoRow>
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
                <BoldHeader>Overview </BoldHeader> {description}
              </InfoRow>
            </StyledText>
          </div>
          {/* <ThemeProvider theme={theme}> */}
          {/* <Button
            variant="outlined"
            color="primary"
            size="large"
            endIcon={<ArrowForward />}
            sx={{ backgroundColor: '#FFFFFF' }}
          >
            See More Facts and Features
          </Button> */}
          {/* </ThemeProvider> */}
        </Wrapper>
      </Box>
    </Container>
  );
}
export default DetailedInfo;

const InfoRow = styled.p`
  margin-bottom: 10px;
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
  margin: -23px;
  background-color: white;
  text-align: center;
  box-shadow: 10px 10px #fbe8e9;
`;

const Section = styled.section`
  display: flex;
`;

const Bold = styled.b`
  font-weight: bold;
  margin-top: 30px;
`;
const BoldHeader = styled.h2`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 20px;
`;

const Box = styled.div`
  padding: 20px;
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

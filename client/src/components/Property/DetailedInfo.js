import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Info, ArrowForward } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { themeColorPink } from '../../styles/theme';

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
          width: '100vw',
          height: '100vh',
          paddingTop: '5em',
        }}
      >
        <Grid container spacing={20}>
          <Grid item xs={12} sm={6}>
            <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                <InfoRow>
                  <Bold>Home Type: </Bold> {homeType}
                </InfoRow>
                <InfoRow>
                  <Bold>Year Built: </Bold> {yearBuilt}
                </InfoRow>
                <InfoRow>
                  <Bold>Living Area: </Bold> {livingArea}
                </InfoRow>
                <InfoRow>
                  <Bold>Price Per sqft: </Bold> {pricePerSquareFoot}
                </InfoRow>
                <InfoRow>
                  <Bold> House Age: </Bold>
                  {new Date().getFullYear() - yearBuilt}
                </InfoRow>
                <InfoRow>
                  <Bold>Monthly Strata Fee: </Bold> {monthlyHoaFee}
                </InfoRow>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                <InfoRow>
                  <Bold>Date Posted: </Bold> {datePosted}
                </InfoRow>
                <InfoRow>
                  <Bold>Home Insurance: </Bold> {annualHomeownersInsurance} CAD
                </InfoRow>
                <InfoRow>
                  <Bold>Home Status: </Bold> {homeStatus}
                </InfoRow>
                <InfoRow>
                  <Bold>Garage: </Bold> {hasGarage === true ? 'Yes' : 'No'}
                </InfoRow>
                <InfoRow>
                  <Bold>Bathrooms: </Bold> {bathrooms}
                </InfoRow>
                <InfoRow>
                  <Bold>Bedrooms: </Bold> {bedrooms}
                </InfoRow>
              </Typography>
            </div>
          </Grid>
        </Grid>

        <Divider sx={{ borderBottomWidth: 3 }} />
        <div
          style={{ textAlign: 'left', marginBottom: '3rem', marginTop: '3rem' }}
        >
          <p>
            <InfoRow>
              <BoldHeader>Overview </BoldHeader> {description}
            </InfoRow>
          </p>
        </div>
        <Button
          variant="outlined"
          color="success"
          size="large"
          endIcon={<ArrowForward />}
        >
          See More Facts and Features
        </Button>
      </Box>
    </Container>
  );
}
export default DetailedInfo;

const InfoRow = styled.p`
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  width: 65rem;
  display: 'flex';
  font-size: 15px;
  flex-direction: column;
`;

const Section = styled.section`
  display: flex;
`;

const Bold = styled.b`
  font-weight: bold;
  margin-top: 30px;
`;

const Column = styled.div`
  flex: 1;
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

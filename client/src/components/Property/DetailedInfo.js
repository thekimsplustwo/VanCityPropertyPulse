import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Info } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import { ArrowForward } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import themeColorPink from '../../styles/theme';

function DetailedInfo(props) {
  // decompose props
  const cssStyle = {
    padding: '20px',
  };

  const { type, style, size, lotSize, age, taxes, added, updated, lastChecked, mls, source, listedBy, description } =
    props.propertyDetails;

  return (
    <Container maxWidth="xl" style={{ marginTop: '0rem', marginBottom: '7rem' }}>
      <Grid container spacing={20}>
        <Grid item xs={12} sm={6}>
          <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
              <p>
                <InfoRow>
                  <Bold>Type: </Bold> {type}
                </InfoRow>
              </p>
              <p>
                <InfoRow>
                  <Bold>Style: </Bold> {style}
                </InfoRow>
              </p>
              <p>
                <InfoRow>
                  <Bold>Size: </Bold> {size}
                </InfoRow>
              </p>
              <p>
                <InfoRow>
                  <Bold>Lot Size: </Bold> {lotSize}
                </InfoRow>
              </p>
              <p>
                <InfoRow>
                  <Bold> House Age: </Bold> {age}
                </InfoRow>
              </p>
              <p>
                <InfoRow>
                  <Bold>Taxes: </Bold> {taxes}
                </InfoRow>
              </p>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
              <p>
                <InfoRow>
                  <Bold>Added: </Bold> {added}
                </InfoRow>
              </p>
              <p>
                <InfoRow>
                  <Bold>Updated: </Bold> {updated}
                </InfoRow>
              </p>
              <p>
                <InfoRow>
                  <Bold>Last Checked: </Bold> {lastChecked}
                </InfoRow>
              </p>
              <p>
                <InfoRow>
                  <Bold>MLS: </Bold> {mls}
                </InfoRow>
              </p>
              <p>
                <InfoRow>
                  <Bold>Source: </Bold> {source}
                </InfoRow>
              </p>
              <p>
                <InfoRow>
                  <Bold>Listed By: </Bold> {listedBy}
                </InfoRow>
              </p>
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Divider sx={{ borderBottomWidth: 3 }}></Divider>
      <div style={{ textAlign: 'left', marginBottom: '3rem', marginTop: '3rem' }}>
        <p>
          <InfoRow>
            <BoldHeader>Overview </BoldHeader> {description}
          </InfoRow>
        </p>
      </div>
      <Button variant="outlined" color="success" size="large" endIcon={<ArrowForward />}>
        See More Facts and Features
      </Button>
    </Container>
  );
}
export default DetailedInfo;

const InfoRow = styled.p`
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  display: 'flex';
  font-size: 20px;
  flex-direction: column;
  font-family: arial, sans-serif;
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

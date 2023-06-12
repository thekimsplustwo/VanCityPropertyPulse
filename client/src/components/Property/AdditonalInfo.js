import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Info, ArrowForward, Add } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import themeColorPink from '../../styles/theme';
// import { Bold, InfoRow } from './DetailedInfo';

function AdditionalInfo() {
  return (
    <Wrapper>
      <Divider sx={{ borderBottomWidth: 3 }} />
      <InfoRow>
        <Bold>Sold History</Bold>
        <ButtonWrapper>
          <Button variant="outlined" color="success" size="medium" endIcon={<Add />} />
        </ButtonWrapper>
      </InfoRow>
      <MarginBottom>
        <Description>Listing records and last sold date.</Description>
      </MarginBottom>
      <Divider sx={{ borderBottomWidth: 3 }} />
      <InfoRow>
        <Bold>Home Value</Bold>
        <ButtonWrapper>
          <Button variant="outlined" color="success" size="medium" endIcon={<Add />} />
        </ButtonWrapper>
      </InfoRow>
      <MarginBottom>
        <Description>Price estimate and comparables.</Description>
      </MarginBottom>
      <Divider sx={{ borderBottomWidth: 3 }} />
      <InfoRow>
        <Bold>Neighbourhood</Bold>
        <ButtonWrapper>
          <Button variant="outlined" color="success" size="medium" endIcon={<Add />} />
        </ButtonWrapper>
      </InfoRow>
      <MarginBottom>
        <Description>Schoolds, amenities, travel times, and market trends.</Description>
      </MarginBottom>
    </Wrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
`;
const Wrapper = styled.div`
  display: 'flex';
  font-size: 20px;
  flex-direction: column;
  font-family: arial, sans-serif;
`;

const InfoRow = styled.p`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Bold = styled.b`
  font-weight: bold;
  font-size: 32px;
  align-items: left;
  margin-top: 20px;
  margin-left: 20px;
`;

const Description = styled.p`
  font-size: 20px;
  color: #666666;
  margin-left: 20px;
`;

const MarginBottom = styled.div`
  margin-bottom: 20px;
`;

export default AdditionalInfo;

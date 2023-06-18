import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Info } from '@mui/icons-material';

function DetailedInfo({ propertyDetails }) {
  // decompose props
  const cssStyle = {
    backgroundColor: 'lightgrey',
    padding: '20px',
  };
  const {
    type,
    style,
    size,
    lotSize,
    age,
    taxes,
    added,
    updated,
    lastChecked,
    mls,
    source,
    listedBy,
    description,
  } = propertyDetails;

  return (
    <Wrapper>
      <InfoRow>
        <Bold>Type: </Bold> {type}
      </InfoRow>
      <InfoRow>
        <Bold>Style: </Bold> {style}
      </InfoRow>
      <InfoRow>
        <Bold>Size: </Bold> {size}
      </InfoRow>
      <InfoRow>
        <Bold>Lot Size: </Bold> {lotSize}
      </InfoRow>
      <InfoRow>
        <Bold> House Age: </Bold> {age}
      </InfoRow>
      <InfoRow>
        <Bold>Taxes: </Bold> {taxes}
      </InfoRow>
      <InfoRow>
        <Bold>Added: </Bold> {added}
      </InfoRow>
      <InfoRow>
        <Bold>Updated: </Bold> {updated}
      </InfoRow>
      <InfoRow>
        <Bold>Last Checked: </Bold> {lastChecked}
      </InfoRow>
      <InfoRow>
        <Bold>MLS: </Bold> {mls}
      </InfoRow>
      <InfoRow>
        <Bold>Source: </Bold> {source}
      </InfoRow>
      <InfoRow>
        <Bold>Listed By: </Bold> {listedBy}
      </InfoRow>
      <InfoRow>
        <Bold>Description: </Bold> {description}
      </InfoRow>
    </Wrapper>
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
`;

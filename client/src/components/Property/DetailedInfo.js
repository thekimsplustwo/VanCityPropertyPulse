import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Info } from '@mui/icons-material';

function DetailedInfo(props) {
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
  } = props.propertyDetails;
  return (
    <Wrapper>
      <div style={cssStyle}>
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
        <p>
          <InfoRow>
            <Bold>Description: </Bold> {description}
          </InfoRow>
        </p>
      </div>
    </Wrapper>
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
`;

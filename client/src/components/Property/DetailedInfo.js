import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Info } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import { ArrowForward } from '@mui/icons-material';
import themeColorPink from '../../styles/theme';

function DetailedInfo(props) {
  // decompose props
  const cssStyle = {
    padding: '20px',
  };

  const { type, style, size, lotSize, age, taxes, added, updated, lastChecked, mls, source, listedBy, description } =
    props.propertyDetails;

  return (
    <Wrapper>
      <LeftColumn>
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
        </div>
      </LeftColumn>
      <RightColumn>
        <div style={cssStyle}>
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
        </div>
        <Divider sx={{ borderBottomWidth: 5 }}></Divider>
        <div style={cssStyle}>
          <p>
            <InfoRow>
              <Bold>Description: </Bold> {description}
            </InfoRow>
          </p>
        </div>
      </RightColumn>
      <Button variant="outlined" color="success" size="large" endIcon={<ArrowForward />}>
        See More Facts and Features
      </Button>
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

const Column = styled.div`
  flex: 1;
`;

const LeftColumn = styled(Column)`
  order: 1;
`;

const RightColumn = styled(Column)`
  order: 2;
`;

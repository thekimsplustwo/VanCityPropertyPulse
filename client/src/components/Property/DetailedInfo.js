import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const details = {
  type: 'House',
  style: 'Contemporary',
  size: '5000+ sqft',
  lot_size: '45.60 x 146.54 Feet',
  age: '0-5',
  taxes: '$5,000 /yr',
  added: 'Jun 9 2021',
  updated: 'Jun 10, 2021',
  last_checked: 'Jun 10, 2021',
  mls: 'W5267789',
  source: 'Toronto Real Estate Board',
  listed_by: 'RE/MAX REALTY SPECIALISTS INC., BROKERAGE',
};

const description = `This contemporary-style house is a stunning property that offers a spacious living experience. With a size of over 5000 square feet, this home provides ample room for comfortable living and entertaining. The lot size measures approximately 45.60 x 146.54 feet, providing a generous outdoor space for various activities.

Built within the last five years, this house is relatively new and boasts modern features and finishes. It offers a fresh and updated living environment with contemporary architectural design elements.

The property is located in Toronto, as indicated by its listing on the Toronto Real Estate Board (MLS: W5267789) and is presented by RE/MAX REALTY SPECIALISTS INC., BROKERAGE. The house is conveniently situated in a desirable area, allowing residents to enjoy the amenities and attractions the city has to offer.

The annual taxes for this house amount to approximately $5,000, providing an estimate of the property's yearly tax obligations. The house was added to the market on June 9, 2021, and has since been updated on June 10, 2021, demonstrating the property's recent availability and potential for up-to-date features.

Overall, this contemporary house offers a spacious and modern living space, coupled with an attractive lot size, making it an appealing option for those seeking a comfortable and stylish home in Toronto.`;

function DetailedInfo(props) {
  return (
    <Wrapper>
      <p>
        <Bold>Type: </Bold> {details.type}
      </p>
      <p>
        <Bold>Style: </Bold> {details.style}
      </p>
      <p>
        <Bold>Size: </Bold> {details.size}
      </p>
      <p>
        <Bold>Lot Size: </Bold> {details.lot_size}
      </p>
      <p>
        <Bold>Age: </Bold> {details.age}
      </p>
      <p>
        <Bold>Taxes: </Bold> {details.taxes}
      </p>
      <p>
        <Bold>Added: </Bold> {details.added}
      </p>
      <p>
        <Bold>Updated: </Bold> {details.updated}
      </p>
      <p>
        <Bold>Last Checked: </Bold> {details.last_checked}
      </p>
      <p>
        <Bold>MLS: </Bold> {details.mls}
      </p>
      <p>
        <Bold>Source: </Bold> {details.source}
      </p>
      <p>
        <Bold>Listed By: </Bold> {details.listed_by}
      </p>
      <p>
        <Bold>Description: </Bold> {description}
      </p>
    </Wrapper>
  );
}
export default DetailedInfo;

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

import * as React from 'react';
import styled from 'styled-components';
import BedSelect from './SearchButtons/BedSelect';
import HomeType from './SearchButtons/HomeType';
import PriceRange from './SearchButtons/PriceRange';

const OptionsContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  width: 400px;
  position: absolute;
  bottom: 20px;

  @media (max-width: 700px) {
    width: 350px;
    justify-content: space-around;
  }
`;

export default function SearchOptions() {
  return (
    <OptionsContainer>
      <PriceRange />
      <BedSelect />
      <HomeType />
    </OptionsContainer>
  );
}

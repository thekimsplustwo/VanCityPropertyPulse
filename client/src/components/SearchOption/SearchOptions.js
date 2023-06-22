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

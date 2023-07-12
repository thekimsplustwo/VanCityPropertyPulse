import React from 'react';
import styled from 'styled-components';
import PropertyCard from './PropertyCard';
import './PropertyGrid.css';

function PropertyGrid({ properties, showCompareButton }) {
  return (
    <Wrapper>
      <Section>
        <CardWrapper>
          {properties.map(property => (
            <PropertyCard
              key={property.zpid}
              property={property}
              showCompareButton={showCompareButton}
            />
          ))}
        </CardWrapper>
      </Section>
    </Wrapper>
  );
}

export default PropertyGrid;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
`;

const Section = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-top: 40px;
  flex-shrink: 0;
`;

const CardWrapper = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-flow: row;
  flex-wrap: wrap;
`;

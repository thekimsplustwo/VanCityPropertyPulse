import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import ImageCarousel from '../../components/Property/ImageCarousel';
import DetailedInfo from '../../components/Property/DetailedInfo';
import { images } from '../../data/data';

const id = '5500-Grand-Lake-Dr,-San-Antonio,-TX-78244';
const propertyImages = images.find(({ pid }) => pid === id).images;

function Property() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [query, setQuery] = useSearchParams();
  const searchParams = new URLSearchParams(query);

  return (
    <Wrapper>
      <HeaderWrapper>
        <h1>${id}</h1>
      </HeaderWrapper>
      <ContentWrapper>
        <ImageCarousel propertyImages={propertyImages} />
        <DetailedInfo />
      </ContentWrapper>
    </Wrapper>
  );
}

const Main = styled.div``;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  h1 {
    font-size: 30px;
    font-weight: 700;
  }
  padding: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
`;

export default Property;

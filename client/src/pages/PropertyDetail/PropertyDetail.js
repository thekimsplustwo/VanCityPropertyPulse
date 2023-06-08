import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import ImageCarousel from '../../components/Property/ImageCarousel';
import DetailedInfo from '../../components/Property/DetailedInfo';

function Property() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [query, setQuery] = useSearchParams();
  const searchParams = new URLSearchParams(query);

  return (
    <Wrapper>
      <DetailedInfo />
      <ImageCarousel />
    </Wrapper>
  );
}

const Main = styled.div``;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid blue;
`;

export default Property;

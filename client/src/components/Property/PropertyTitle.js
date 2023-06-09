import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import ImageCarousel from './ImageCarousel';
import DetailedInfo from './DetailedInfo';
import { images } from '../../data/data';

const id = '5500-Grand-Lake-Dr,-San-Antonio,-TX-78244';
const propertyImages = images.find(({ pid }) => pid === id).images;

function PropertyHeader(props) {
  const { id } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [query, setQuery] = useSearchParams();
  const searchParams = new URLSearchParams(query);

  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderTitle>
          <h1>${id}</h1>
        </HeaderTitle>
      </HeaderWrapper>
    </Wrapper>
  );
}

const Main = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 20px;
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 30px;
    font-weight: 700;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid gray;
  opacity: 0.3;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  border-radius: 10px;
  padding: 3px 8px;
`;

const MenuOpt = styled.div`
  padding: 0 0.3rem;
  font-size: 15px;
  font-weight: 500px;
`;
const ContentWrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
`;

export default PropertyHeader;

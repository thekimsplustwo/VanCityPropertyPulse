import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import ImageCarousel from '../../components/Property/ImageCarousel';
import DetailedInfo from '../../components/Property/DetailedInfo';
import { images } from '../../data/data';
import PropertyHeader from '../../components/Property/PropertyTitle';
import MenuItems from '../../components/Property/MenuItems';

function Property() {
  const params = useParams();

  const propertyImages = images.find(({ pid }) => pid === params.pid).images;
  const [query, setQuery] = useSearchParams();
  const searchParams = new URLSearchParams(query);

  return (
    <Wrapper>
      <HeaderWrapper>
        <PropertyHeader pid={params.pid} />
        <MenuItems />
      </HeaderWrapper>
      <ContentWrapper>
        <ImageCarousel propertyImages={propertyImages} />
        <DetailedInfo />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 8em;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 50px;
`;

const ContentWrapper = styled.div`
  padding: 10px 50px;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
`;

export default Property;

import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import ImageCarousel from '../../components/Property/ImageCarousel';
import DetailedInfo from '../../components/Property/DetailedInfo';
import { images } from '../../data/data';
import PropertyHeader from '../../components/Property/PropertyTitle';
import MenuItems from '../../components/Property/MenuItems';

const demoPropertyDetails = {
  type: 'House',
  style: 'Contemporary',
  size: '5000+ sqft',
  lotSize: '45.60 x 146.54 Feet',
  age: '0-5',
  taxes: '$5,000 /yr',
  added: 'Jun 9 2021',
  updated: 'Jun 10, 2021',
  lastChecked: 'Jun 10, 2021',
  mls: 'W5267789',
  source: 'Toronto Real Estate Board',
  listedBy: 'Demo Brokerage',
  description: `This contemporary-style house is a stunning property that offers a spacious living experience. With a size of over 5000 square feet, this home provides ample room for comfortable living and entertaining. The lot size measures approximately 45.60 x 146.54 feet, providing a generous outdoor space for various activities.`,
};

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
        <DetailedInfo propertyDetails={demoPropertyDetails} />
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
  margin: 0;
`;

export default Property;

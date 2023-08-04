import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import ImageCarousel from '../../components/Property/ImageCarousel';
import DetailedInfo from '../../components/Property/DetailedInfo';
import PropertyHeader from '../../components/Property/PropertyTitle';
import MenuItems from '../../components/Property/MenuItems';
import AdditionalInfo from '../../components/Property/AdditonalInfo';
import { getPropertyAsync } from '../../redux/property/thunks';
import VirtualTour from '../../components/Property/VirtualTour';
import MapBox from '../../components/Property/MapBox';
import PropertyNotFound from '../../components/Property/PropertyNotFound';
import NearByHomes from '../../components/Property/NearByHomes';
import WalkScore from '../../components/Property/WalkScore';
import { isObjectValid } from '../../utils/utils';

function Property() {
  const token = localStorage.getItem('token');

  const navigate = useNavigate();
  const { zpid } = useParams();
  const property = useSelector(state => state.property.property);
  const isLogin = useSelector(state => state.users.isLogin);

  const dispatch = useDispatch();

  const navigateToLogin = () => {
    navigate('/');
  };

  useEffect(() => {
    if (!isLogin) {
      navigateToLogin();
    } else {
      dispatch(getPropertyAsync({ zpid, token }));
    }
  }, [dispatch, zpid]);

  if (isObjectValid(property)) {
    const images = Array.isArray(property.imgSrc)
      ? property.imgSrc
      : [property.imgSrc];
    const { nearbyHomes, longitude, latitude } = property;
    return (
      <Wrapper>
        <HeaderWrapper>
          <PropertyHeader propertyDetails={property} />
          <MenuItems zpid={zpid} address={property.address?.streetAddress} />
        </HeaderWrapper>
        <ContentWrapper>
          <GraphicWrapper>
            <ImageCarousel propertyImages={images} />
            <MapBox longitude={longitude} latitude={latitude} />
          </GraphicWrapper>
          <DetailedInfo propertyDetails={property} />
        </ContentWrapper>
        <Row>
          {property.resoFacts && (
            <VirtualTour virtualTour={property.resoFacts.virtualTour} />
          )}
        </Row>
        <Divider sx={{ borderBottomWidth: 4 }} />
        <AdditionalInfo />
        <Divider sx={{ borderBottomWidth: 4 }} />
        <NearByHomes nearbyHomes={nearbyHomes} />
        <Divider sx={{ borderBottomWidth: 4 }} />
        <WalkScore zpid={zpid} />
      </Wrapper>
    );
  }
  return <PropertyNotFound />;
}

export default Property;

const Wrapper = styled.div`
  padding-top: 6em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-around;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 50px;
  justify-content: center;
`;

const GraphicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;

  @media (max-width: 800px) {
    margin-bottom: 30px;
    margin-left: 30px;
  }
`;

const ContentWrapper = styled.div`
  padding: 10px 50px;
  display: flex;
  align-items: stretch;
  margin: 0;
  vertical-align: top;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

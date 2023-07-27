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
import { isObjectValid } from '../../utils/utils';
import { LOGIN_URI } from '../../config';
import NearByHomes from '../../components/Property/NearByHomes';

function Property() {
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
      dispatch(getPropertyAsync(zpid));
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
        {property.resoFacts && (
          <VirtualTour virtualTour={property.resoFacts.virtualTour} />
        )}
        <Divider sx={{ borderBottomWidth: 1 }} />
        <AdditionalInfo />
        <Divider sx={{ borderBottomWidth: 1 }} />
        {nearbyHomes && <NearByHomes nearProperties={property} />}
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
  align-items: flex-start;
  padding: 20px 50px;
  width: 100%;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  padding: 10px 50px;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  margin: 0;
`;

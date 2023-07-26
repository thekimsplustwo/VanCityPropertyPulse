import { useParams, useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
// import Map, { Marker } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import ImageCarousel from '../../components/Property/ImageCarousel';
import DetailedInfo from '../../components/Property/DetailedInfo';
import PropertyHeader from '../../components/Property/PropertyTitle';
import MenuItems from '../../components/Property/MenuItems';
import AdditionalInfo from '../../components/Property/AdditonalInfo';
import { getPropertyAsync } from '../../redux/property/thunks';
import VirtualTour from '../../components/Property/VirtualTour';
import PropertyNotFound from '../../components/Property/PropertyNotFound';
import { isObjectValid } from '../../utils/utils';
import {
  MAPBOX_TOKEN,
  MAPBOX_STYLE,
  MAPBOX_ZOOM,
  LOGIN_URI,
} from '../../config';
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
    const currLong = parseFloat(property.longitude);
    const currLat = parseFloat(property.latitude);

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(currLong);
    const [lat, setLat] = useState(currLat);
    const [zoom, setZoom] = useState(MAPBOX_ZOOM);

    mapboxgl.accessToken = MAPBOX_TOKEN;

    useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: MAPBOX_STYLE,
        center: [lng, lat],
        zoom,
      });

      // if (map.current) {
      //   map.current.setLng(mapOptions.center[0]);
      //   map.current.setLat(mapOptions.center[1]);
      //   map.current.setCenter(mapOptions.center);
      //   map.current.setZoom(mapOptions.zoom);
      // } else {
      //   map.current = new mapboxgl.Map(mapOptions);
      // }

      const markerElement = document.createElement('div');
      markerElement.textContent = '📍';
      markerElement.style.fontSize = '30px';

      new mapboxgl.Marker(markerElement)
        .setLngLat([lng, lat])
        .addTo(map.current);
    }, [property.longitude, property.latitude]);

    const { nearbyHomes } = property;

    return (
      <Wrapper>
        <HeaderWrapper>
          <PropertyHeader propertyDetails={property} />
          <MenuItems zpid={zpid} />
        </HeaderWrapper>
        <ContentWrapper>
          <GraphicWrapper>
            <ImageCarousel propertyImages={images} />
            <div>
              <div
                ref={mapContainer}
                style={{
                  width: '500px',
                  height: '400px',
                  border: '1px solid #ccc',
                }}
              />
            </div>
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

const ContentWrapper = styled.div`
  padding: 10px 50px;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  margin: 0;
`;

const GraphicWrapper = styled.div`
  display: start;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 50px;
  width: 100%;
  justify-content: center;
`;

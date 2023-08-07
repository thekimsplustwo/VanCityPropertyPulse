import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getListAsync } from '../../redux/home/thunks';
import NearbyProperties from '../Property/NearbyProperties';

function NearbyMe({ region }) {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  useEffect(() => {
    if (region) {
      dispatch(
        getListAsync({
          params: {
            location: region,
            page: 1,
          },
          token,
        })
      );
    }
  }, [dispatch, region]);

  const properties = useSelector(state => state.home.list);
  let filteredProperties = [];
  if (region === '') {
    filteredProperties = [];
  } else {
    filteredProperties = properties.filter(
      property => property.listingStatus === 'FOR_SALE'
    );
  }
  let limitedProperties = [];
  if (properties.length !== 0) {
    if (filteredProperties && filteredProperties.length >= 10) {
      limitedProperties = filteredProperties.slice(0, 10);
    } else {
      limitedProperties = filteredProperties;
    }
  }

  const adaptHomeData = homeData => {
    return {
      zpid: homeData.zpid,
      imgSrc: homeData.imgSrc || '',
      listingStatus: homeData.listingStatus,
      price: homeData.price,
      bedrooms: homeData.bedrooms,
      bathrooms: homeData.bedrbathroomsooms,
      livingArea: homeData.livingArea,
      address: homeData.address,
    };
  };

  return (
    limitedProperties && (
      <Wrapper>
        <InfoRow />
        <Bold>Nearby Me</Bold>
        <NearbyProperties
          properties={limitedProperties}
          adaptHomeData={adaptHomeData}
        />
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  display: 'flex';
  font-size: 20px;
  flex-direction: column;
  font-family: arial, sans-serif;
  margin-top: 2rem;
`;

const Bold = styled.b`
  font-weight: bold;
  font-size: 32px;
  align-items: left;
  margin-top: 20px;
  margin-left: 20px;
`;

const InfoRow = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export default NearbyMe;

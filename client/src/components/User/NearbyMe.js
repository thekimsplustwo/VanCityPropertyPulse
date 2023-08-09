import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getListAsync } from '../../redux/home/thunks';
import NearbyProperties from '../Property/NearbyProperties';

function NearbyMe({ region }) {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const properties = useSelector(state => state.home.list);

  useEffect(() => {
    if (region && region !== '') {
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

  const limitedProperties = useMemo(() => {
    if (properties && properties.length !== 0 && region && region !== '') {
      return properties.length >= 10 ? properties.slice(0, 10) : properties;
    }

    return [];
  }, [properties, dispatch]);

  return (
    limitedProperties?.length > 0 && (
      <Wrapper>
        <InfoRow />
        <Bold>Nearby Me</Bold>
        <NearbyProperties properties={limitedProperties} />
      </Wrapper>
    )
  );
}

export default NearbyMe;

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

  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

const InfoRow = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

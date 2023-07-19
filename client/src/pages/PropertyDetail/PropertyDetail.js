import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import ImageCarousel from '../../components/Property/ImageCarousel';
import DetailedInfo from '../../components/Property/DetailedInfo';
import PropertyHeader from '../../components/Property/PropertyTitle';
import MenuItems from '../../components/Property/MenuItems';
import AdditionalInfo from '../../components/Property/AdditonalInfo';
import { getPropertyAsync } from '../../redux/property/thunks';
import PropertyNotFound from '../../components/Property/PropertyNotFound';
import { isObjectValid } from '../../utils/utils';
import { LOGIN_URI } from '../../config';

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
  }, [dispatch]);

  if (isObjectValid(property)) {
    const images = Array.isArray(property.imgSrc)
      ? property.imgSrc
      : [property.imgSrc];
    return (
      isLogin && (
        <Wrapper>
          <HeaderWrapper>
            <PropertyHeader propertyDetails={property} />
            <MenuItems zpid={zpid} />
          </HeaderWrapper>
          <ContentWrapper>
            <ImageCarousel propertyImages={images} />
            <DetailedInfo propertyDetails={property} />
          </ContentWrapper>
          <Divider sx={{ borderBottomWidth: 1 }} />
          <AdditionalInfo />
        </Wrapper>
      )
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
  align-item: space-around;
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

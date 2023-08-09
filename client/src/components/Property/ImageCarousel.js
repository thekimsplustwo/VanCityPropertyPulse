import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, styled as muiStyled } from '@mui/material';
import { v4 as uuid } from 'uuid';
import Image from './Image';

function ImageCarousel({ property, propertyImages }) {
  const navigate = useNavigate();
  const location = useLocation();

  const onClickHandler = event => {
    event.preventDefault();
    event.stopPropagation();
    if (location.pathname === '/compare') {
      navigate(`/properties/${property.zpid}`);
    }
  };

  const images = Array.isArray(propertyImages)
    ? propertyImages
    : [propertyImages];

  return (
    <Wrapper>
      <Section>
        {propertyImages ? (
          <CarouselBox location={location.pathname} onClick={onClickHandler}>
            <Carousel>
              {images.map(image => (
                <Image key={uuid()} image={image} />
              ))}
            </Carousel>
          </CarouselBox>
        ) : (
          <ImageEmpty />
        )}
      </Section>
    </Wrapper>
  );
}

export default ImageCarousel;

const Wrapper = styled.div`
  width: 100%;
`;

const Section = styled.section``;

const ImageEmpty = styled.div``;

const CarouselBox = muiStyled(Box)(({ theme, location }) => ({
  maxWidth: '500px',
  flexGrow: 1,
  [theme.breakpoints.down('sm')]: {
    maxWidth: '300px',
  },
  '&:hover': {
    cursor: location === '/compare' ? 'pointer' : 'auto',
  },
}));

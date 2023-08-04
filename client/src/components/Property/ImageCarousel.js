import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import { Box, styled as muiStyled } from '@mui/material';
import Image from './Image';

function ImageCarousel(props) {
  const { propertyImages } = props;
  return (
    <Wrapper>
      <Section>
        {propertyImages ? (
          <CarouselBox>
            <Carousel>
              {propertyImages.map((image, index) => (
                <Image key={index} image={image} />
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
  // height: 100%;
`;

const Section = styled.section``;

const ImageEmpty = styled.div``;

const CarouselBox = muiStyled(Box)(({ theme }) => ({
  maxWidth: '500px',
  flexGrow: 1,
  [theme.breakpoints.down('sm')]: {
    maxWidth: '300px',
  },
}));

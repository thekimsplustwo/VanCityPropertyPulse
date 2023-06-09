import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';
import Image from './Image';

function ImageCarousel(props) {
  const { property } = props;
  const { propertyImages } = props;
  return (
    <Wrapper>
      <Section>
        {propertyImages ? (
          <Box sx={{ maxWidth: 500, flexGrow: 1 }}>
            <Carousel>
              {propertyImages.map((image, index) => (
                <Image key={index} image={image} />
              ))}
            </Carousel>
          </Box>
        ) : (
          <ImageEmpty />
        )}
      </Section>
    </Wrapper>
  );
}

export default ImageCarousel;

const Wrapper = styled.div`
  width: 100vw;
  hight: 100vh;
`;

const Section = styled.section``;

const ImageEmpty = styled.div``;

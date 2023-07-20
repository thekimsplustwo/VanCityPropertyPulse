/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { styled as muiStyled } from '@mui/material';
import Divider from '@mui/material/Divider';
import Slider from 'react-slick';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { themeColorPink } from '../../styles/theme';
import PropertyCard from './PropertyCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const calculateSlidesToShow = () => {
  const element = document.querySelector(
    '.slick-slide.slick-active.slick-center.slick-current img'
  );
  const elementWidth = element ? element.offsetWidth : 0;
  const windowWidth = window.innerWidth;
  const slidesToShow = Math.floor(windowWidth / (elementWidth + 50));
  return slidesToShow > 0 ? slidesToShow : 1;
};

function NearByHomes({ nearProperties }) {
  const similarHomes = nearProperties.nearbyHomes; // Array
  const sliderRef = useRef();
  const [slides, setSlides] = useState(calculateSlidesToShow());

  useEffect(() => {
    const handleResize = () => {
      setSlides(calculateSlidesToShow());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sliderSettings = {
    speed: 1300,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: slides || 1,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    dots: true,
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const adaptHomeData = homeData => {
    return {
      zpid: homeData.zpid,
      imgSrc: homeData.miniCardPhotos[0]?.url || '',
      listingStatus: homeData.homeStatus,
      price: homeData.price,
      bedrooms: null,
      bathrooms: null,
      livingArea: null,
      address: `${homeData.address.streetAddress}, ${homeData.address.city}, ${homeData.address.state} ${homeData.address.zipcode}`,
    };
  };

  return (
    <Wrapper>
      <Divider sx={{ borderBottomWidth: 3 }} />
      <InfoRow />
      <Bold>Nearby homes</Bold>
      <SliderContainer>
        <StyledSlider ref={sliderRef} {...sliderSettings}>
          {similarHomes.map(home => {
            const adaptedHome = adaptHomeData(home);
            return (
              <StyledDiv key={home.zpid}>
                <PropertyCard
                  key={home.zpid}
                  property={adaptedHome}
                  showCompareButton={false}
                  showHeartIcon={false}
                />
              </StyledDiv>
            );
          })}
        </StyledSlider>
      </SliderContainer>
      <ButtonContainer>
        <StyledButton type="button" onClick={handlePrev}>
          <KeyboardDoubleArrowLeftIcon />
        </StyledButton>

        <StyledButton type="button" onClick={handleNext}>
          <KeyboardDoubleArrowRightIcon />
        </StyledButton>
      </ButtonContainer>
    </Wrapper>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  &:hover {
    cursor: pointer;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const StyledSlider = styled(Slider)`
  flex-grow: 0;
  margin: 0 1em;
  width: 100%;
  .slick-list {
    margin-top: 10px;
  }

  .slick-slide > div {
    display: grid;
    place-items: center;
    width: 100px;
    height: 440px !important;
  }

  .slick-dots {
    display: flex;
    justify-content: center; /* Center the dot buttons horizontally */
    align-items: center; /* Center the dot buttons vertically */
  }
  .slick-dots li button:before {
    color: ${themeColorPink};
  }
  .slick-dots li.slick-active button {
    transform: scale(1.5);
  }
  .slick-dots li.slick-active button:before {
    transform: scale(1.5);
    color: ${themeColorPink};
  }
`;

const Wrapper = styled.div`
  display: 'flex';
  font-size: 20px;
  flex-direction: column;
  font-family: arial, sans-serif;
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

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export default NearByHomes;

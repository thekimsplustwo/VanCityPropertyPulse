/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { v4 as uuid } from 'uuid';
import { themeColorPink } from '../../styles/theme';
import PropertyCard from './PropertyCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NearbyProperties({ properties }) {
  const sliderRef = useRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slides, setSlides] = useState(1);

  const calculateSlidesToShow = () => {
    const element = document.querySelector(
      '.slick-slide.slick-active.slick-center.slick-current img'
    );
    const elementWidth = element ? element.offsetWidth : 0;
    let slidesToShow = Math.floor(windowWidth / (elementWidth + 50));
    slidesToShow = slidesToShow > 0 ? slidesToShow : 1;
    slidesToShow = Math.min(slidesToShow, 6);
    return slidesToShow;
  };

  const adaptHomeData = homeData => {
    const addressTrimmed =
      typeof homeData.address === 'string'
        ? homeData.address
        : `${homeData.address.streetAddress}, ${homeData.address.city}, ${homeData.address.state} ${homeData.address.zipcode}`;
    return {
      zpid: homeData.zpid,
      imgSrc: homeData.miniCardPhotos
        ? homeData.miniCardPhotos[0]?.url
        : homeData.imgSrc || '',
      listingStatus: homeData.listingStatus || homeData.homeStatus,
      price: homeData.price,
      bedrooms: homeData.bedrooms || null,
      bathrooms: homeData.bathrooms || null,
      livingArea: homeData.listingArea || null,
      address: addressTrimmed,
    };
  };
  const adaptedProperties = properties
    .map(adaptHomeData)
    .filter(
      property =>
        property.listingStatus === 'FOR_SALE' ||
        property.listingStatus === 'OTHER'
    );
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setSlides(calculateSlidesToShow());
  }, [windowWidth]);

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
    rows: 1,
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    properties && (
      <div>
        <SliderContainer>
          <StyledSlider ref={sliderRef} {...sliderSettings}>
            {adaptedProperties &&
              adaptedProperties.map(home => (
                <StyledDiv key={uuid()}>
                  <PropertyCard
                    key={uuid()}
                    property={home}
                    showCompareButton={false}
                    showHeartIcon={false}
                  />
                </StyledDiv>
              ))}
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
      </div>
    )
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

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export default NearbyProperties;

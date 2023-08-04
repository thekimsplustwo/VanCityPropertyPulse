/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Slider from 'react-slick';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { themeColorPink } from '../../styles/theme';
import PropertyCard from '../Property/PropertyCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getListAsync } from '../../redux/home/thunks';

function NearbyMe({ region }) {
  const token = localStorage.getItem('token');
  const sliderRef = useRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slides, setSlides] = useState(1);
  const dispatch = useDispatch();

  const calculateSlidesToShow = () => {
    const element = document.querySelector(
      '.slick-slide.slick-active.slick-center.slick-current img'
    );
    const elementWidth = element ? element.offsetWidth : 0;
    const slidesToShow = Math.floor(windowWidth / (elementWidth + 50));
    return slidesToShow > 0 ? slidesToShow : 1;
  };

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
  const limitedProperties =
    properties.length >= 10 ? properties.slice(0, 10) : properties;

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
        <SliderContainer>
          <StyledSlider ref={sliderRef} {...sliderSettings}>
            {limitedProperties.map(home => {
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

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export default NearbyMe;

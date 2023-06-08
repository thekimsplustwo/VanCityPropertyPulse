import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

function ImageCarousel(props) {
  const navigate = useNavigate();
  const { item } = props;
  const dispatch = useDispatch();

  const navigateToDetailPage = () => {
    navigate(`/items/:${item.id}`, {
      state: { item },
    });
  };

  const handleRemoveItemBtn = itemId => {
    dispatch(actions.removeItem(itemId));
  };

  return (
    <Wrapper>
      <Section>
        <ImageWrapper>
          {images ? images.map(image => <Image key={image.id} image={image} />) : <ImageEmpty />}
        </ImageWrapper>
      </Section>
    </Wrapper>
  );
}

export default ImageCarousel;

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 15%;
  marin: 0;
  padding: 0;
`;

const Section = styled.section`
  width: 100%
  display: flex;
  justify-content: center;
  padding-bottom: 0px;
`;

const ImageWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const Content = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Context = styled.div`
  width: 100%;
  height: 400px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 20px;
  background: white;
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  div {
    margin: 0;
    padding: 0;
  }
`;

const Img = styled.div`
  margin: 10px;
  img {
    width: 230px;
    height: 290px;
    object-fit: fill;
    border-radius: 5%;
    border: grey;
    margin: 0;
    min-width: 220px;
  }
  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-between;
  margin-bottom: 20px;
  padding: 0 10px;
  overflow: hidden;
`;

const Title = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 0.8rem;
  color: #007aff;
  padding-left: 15px;
`;

const IconContainer = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 700;
  font-size: 28px;
  color: #007aff;
`;

const DeleteIcon = styled(Trash)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  color: #007aff;
  opacity: 0.6;
  padding-right: 10px;
  :hover {
    cursor: pointer;
    opacity: 2;
    width: 40px;
    height: 40px;
  }
  z-index: 0;
`;

const ImageEmpty = styled.div``;

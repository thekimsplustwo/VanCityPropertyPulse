import React, { useState } from 'react';
import styled from 'styled-components';
import placeholderImage from '../../assets/images/imgNotFound.png';

function PropertyImage({ src, alt }) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(placeholderImage);
  };

  return <NewPropertyImage src={imgSrc} alt={alt} onError={handleError} />;
}

const NewPropertyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default PropertyImage;

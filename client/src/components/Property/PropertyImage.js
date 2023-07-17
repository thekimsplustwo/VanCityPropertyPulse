import React, { useState } from 'react';
import placeholderImage from '../../assets/images/imgNotFound.png';

function PropertyImage({ src, alt }) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(placeholderImage);
  };

  return <img src={imgSrc} alt={alt} onError={handleError} />;
}

export default PropertyImage;

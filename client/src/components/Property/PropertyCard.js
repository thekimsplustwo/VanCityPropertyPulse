import './PropertyCard.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { convertPriceToCAD } from '../../utils/utils';

function PropertyCard({ property }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const navigateToPropertyPage = zpid => {
    navigate(`/properties/${zpid}`, {
      state: { zpid },
    });
  };

  const handleLike = event => {
    event.stopPropagation(); // prevent the click event from bubbling up to the parent
    setLiked(!liked); // toggle the liked state
  };

  return (
    <Img onClick={() => navigateToPropertyPage(property.zpid)}>
      <div className="property-card">
        <img src={property.imgSrc} alt="Property" className="property-image" />
        {liked ? (
          <StyledHeartLikedIcon onClick={handleLike} />
        ) : (
          <StyledHeartBorderIcon onClick={handleLike} />
        )}
        <div className="property-info">
          <div className="property-price">
            {convertPriceToCAD(property.price)}
          </div>
          <div className="property-location">{property.address}</div>
        </div>
      </div>
    </Img>
  );
}

export default PropertyCard;

const Img = styled.div`
  margin: 23px;
`;

const StyledHeartBorderIcon = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
`;

const StyledHeartLikedIcon = styled(FavoriteIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: red;
`;

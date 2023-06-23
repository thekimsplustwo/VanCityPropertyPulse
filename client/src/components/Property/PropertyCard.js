import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import './PropertyCard.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { convertPriceToCAD } from '../../utils/utils';

import { addLikesAsync, deleteLikesAsync } from '../../redux/likes/thunks';

function PropertyCard({ property }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currZpid = property.zpid;

  // const likes = useSelector(state => state.likes.list);
  // console.log(likes);
  // const liked = likes.some(property => property.zpid === currZpid);
  const liked = false;

  const navigateToPropertyPage = zpid => {
    navigate(`/properties/${zpid}`, {
      state: { zpid },
    });
  };

  const handleAddLike = event => {
    event.stopPropagation(); // prevent the click event from bubbling up to the parent
    // toggle the liked state
    // console.log('handleAddLike');
    // console.log(property);
    dispatch(addLikesAsync(property));
    // console.log('handleAddLike dispatched');
  };

  const handleDeleteLike = event => {
    event.stopPropagation(); // prevent the click event from bubbling up to the parent
    dispatch(deleteLikesAsync(currZpid));
  };

  return (
    <Img onClick={() => navigateToPropertyPage(property.zpid)}>
      <div className="property-card">
        <img src={property.imgSrc} alt="Property" className="property-image" />
        {liked ? (
          <StyledHeartLikedIcon onClick={handleDeleteLike} />
        ) : (
          <StyledHeartBorderIcon onClick={handleAddLike} />
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

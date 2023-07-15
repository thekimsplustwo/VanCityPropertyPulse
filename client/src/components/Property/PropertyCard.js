import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import './PropertyCard.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { convertPriceToCAD } from '../../utils/utils';

import { addLikesAsync, deleteLikesAsync } from '../../redux/likes/thunks';

function PropertyCard({ property, showCompareButton }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currZpid = property.zpid;

  const likes = useSelector(state => state.likes.list);
  const liked =
    likes && likes.some(like => like.zpid === parseInt(currZpid, 10));

  const navigateToPropertyPage = zpid => {
    navigate(`/properties/${zpid}`, {
      state: { zpid },
    });
  };

  const handleCompare = event => {
    event.stopPropagation();
    navigate(`/compare?item=${property.zpid}`);
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
        <StatusWrapper>
          <StyledStatusIcon />
          <StatusText>{property.listingStatus}</StatusText>
        </StatusWrapper>
        {showCompareButton && (
          <CompareButton onClick={handleCompare}>Compare</CompareButton>
        )}

        <div className="property-info">
          <div className="property-price">
            {convertPriceToCAD(property.price)}
          </div>
          <div>
            <span className="property-bed">Bed {property.bedrooms}, </span>
            <span className="property-bath">Bath {property.bathrooms}, </span>
            <span className="property-area">{property.livingArea} sqft, </span>
          </div>
          <PropertyLocation>{property.address}</PropertyLocation>
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

const StyledStatusIcon = styled(ShowChartIcon)`
  display: flex;
  align-items: center;
  color: white;
  font-size: small;
`;

const StatusWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  background-color: pink;
  border-radius: 10px;
  padding: 2px;
  height: 1.5rem;
`;

const StatusText = styled.span`
  margin-left: 5px;
  margin-right: 2px;
  color: white;
  font-size: 0.85rem;
  font-weight: bold;
`;

const PropertyLocation = styled.div`
  font-size: 1rem;
`;

const CompareButton = styled.button`
  position: absolute;
  bottom: 105px;
  right: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  color: black;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
  font-weight: bold;
`;

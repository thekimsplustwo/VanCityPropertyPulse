import React from 'react';
import './PropertyCard.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function PropertyCard({ property }) {
  const navigate = useNavigate();
  const navigateToPropertyPage = zpid => {
    navigate(`/properties/${zpid}`, {
      state: { zpid },
    });
  };
  return (
    <div className="property-card">
      <Img onClick={() => navigateToPropertyPage(property.zpid)}>
        <img src={property.imgSrc} alt="Property" className="property-image" />
      </Img>
      <div className="property-info">
        <div className="property-price">${property.price}</div>
        <div className="property-location">
          {property.city}, {property.neighborhood}
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;

const Img = styled.div``;

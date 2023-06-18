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
    <Img onClick={() => navigateToPropertyPage(property.zpid)}>
      <div className="property-card">
        <img src={property.imgSrc} alt="Property" className="property-image" />
        <div className="property-info">
          <div className="property-price">${property.price}</div>
          <div className="property-location">
            {property.city}, {property.neighborhood}
          </div>
        </div>
      </div>
    </Img>
  );
}

export default PropertyCard;

const Img = styled.div`
  margin: 23px;
`;

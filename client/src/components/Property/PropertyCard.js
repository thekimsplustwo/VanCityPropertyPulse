import React from 'react';
import './PropertyCard.css';

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img src={property.imgSrc} alt="Property" className="property-image" />
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

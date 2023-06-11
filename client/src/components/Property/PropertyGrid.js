import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyGrid.css';

function PropertyGrid({ properties }) {
  return (
    <div className="property-grid">
      {properties.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
    </div>
  );
}

export default PropertyGrid;

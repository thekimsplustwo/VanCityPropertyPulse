// MapBox.js
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function MapBox({ longitude, latitude }) {
  const mapContainer = useRef(null);
  console.log('longitude', longitude);
  console.log('latitude', latitude);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 13,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);

    return () => {
      map.remove();
      marker.remove();
    };
  }, [longitude, latitude]);

  return (
    <div
      ref={mapContainer}
      style={{
        width: '500px',
        height: '500px',
        position: 'relative',
      }}
    />
  );
}

export default MapBox;

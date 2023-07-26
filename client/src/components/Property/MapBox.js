// MapBox.js
import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MAPBOX_TOKEN, MAPBOX_STYLE, MAPBOX_ZOOM } from '../../config';

mapboxgl.accessToken = MAPBOX_TOKEN;

function MapBox({ longitude, latitude }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(longitude);
  const [lat, setLat] = useState(latitude);
  const [zoom, setZoom] = useState(MAPBOX_ZOOM);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: MAPBOX_STYLE,
      center: [lng, lat],
      zoom,
    });

    const markerElement = document.createElement('div');
    markerElement.textContent = '📍';
    markerElement.style.fontSize = '30px';

    new mapboxgl.Marker(markerElement).setLngLat([lng, lat]).addTo(map.current);
  }, [longitude, latitude]);

  return (
    <div>
      <div
        ref={mapContainer}
        style={{
          width: '500px',
          height: '400px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
}

export default MapBox;

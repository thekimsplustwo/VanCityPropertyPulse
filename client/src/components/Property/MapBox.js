import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import styled from 'styled-components';
import { MAPBOX_STYLE, MAPBOX_TOKEN, MAPBOX_ZOOM } from '../../config';
import 'mapbox-gl/dist/mapbox-gl.css';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/order, import/no-unresolved
import mapboxCspWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = mapboxCspWorker;
mapboxgl.accessToken = MAPBOX_TOKEN;

function MapBox({ longitude, latitude }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markerRef = useRef(null);
  const [lng, setLng] = useState(longitude);
  const [lat, setLat] = useState(latitude);
  const [zoom, setZoom] = useState(MAPBOX_ZOOM);

  useEffect(() => {
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: MAPBOX_STYLE,
        center: [lng, lat],
        zoom,
      });
    }

    const markerElement = document.createElement('div');
    markerElement.textContent = '📍';
    markerElement.style.fontSize = '30px';

    if (markerRef.current) {
      markerRef.current.remove();
    }

    markerRef.current = new mapboxgl.Marker(markerElement)
      .setLngLat([longitude, latitude])
      .addTo(map.current);

    map.current.flyTo({
      center: [longitude, latitude],
    });
  }, [longitude, latitude]);

  return (
    <div>
      <MapBoxContainer ref={mapContainer} />
    </div>
  );
}

export default MapBox;

const MapBoxContainer = styled.div`
  width: 500px;
  height: 400px;
  border: 1px solid #ccc;

  @media (max-width: 600px) {
    width: 290px;
    height: 240px;
  }
`;

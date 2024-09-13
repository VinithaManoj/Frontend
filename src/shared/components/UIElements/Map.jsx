import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Map.css';

const Map = ({ center, zoom, className, style, id }) => {
  const mapRef = useRef();

  useEffect(() => {
    const map = new window.ol.Map({
      target: mapRef.current.id,
      layers: [
        new window.ol.layer.Tile({
          source: new window.ol.source.OSM()
        })
      ],
      view: new window.ol.View({
        center: window.ol.proj.fromLonLat([center.lng, center.lat]),
        zoom: zoom
      })
    });

    return () => map.setTarget(null); // Clean up the map instance
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${className}`}
      style={style}
      id={id}
    ></div>
  );
};

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired,
  zoom: PropTypes.number.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string
};

Map.defaultProps = {
  className: '',
  style: {},
  id: 'map'
};

export default Map;

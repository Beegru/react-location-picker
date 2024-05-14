import Circle from '@beegru/react-google-maps/lib/components/Circle';
import GoogleMap from '@beegru/react-google-maps/lib/components/GoogleMap';
import Marker from '@beegru/react-google-maps/lib/components/Marker';
import withGoogleMap from '@beegru/react-google-maps/lib/withGoogleMap';
import React from 'react';

/* Create map with withGoogleMap HOC */
/* https://github.com/tomchentw/react-google-maps */

const Map = withGoogleMap((props) => {
  const {
    position,
    defaultZoom,
    handleMarkerDragEnd,
    onZoomChanged,
    radius,
    circleOptions,
    shouldRecenterMap,
    zoom
  } = props;

  const circle = (radius !== -1) ?
    <Circle
      center={position}
      radius={radius}
      options={circleOptions}
    /> : null;
  const mapExtraProps = shouldRecenterMap ? { center: position }: {};
  return (
    <GoogleMap
      onZoomChanged={onZoomChanged}
      defaultZoom={defaultZoom}
      defaultCenter={position}
      zoom={zoom}
      {...mapExtraProps}
    >

      {/* Map marker */}
      <Marker
        draggable // Allow marker to drag
        position={position}
        onDragEnd={handleMarkerDragEnd}
      />

      {/* Circle */}
      { circle }
    </GoogleMap>
  )
});

export default Map;

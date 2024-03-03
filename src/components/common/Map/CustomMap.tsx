import React, { useRef } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { MapContainer } from './CustomMap.styled';
import { ICoordinates } from 'interfaces';

const containerStyle = {
  width: '100%',
  height: '100%',
};

interface CustomMapProps {
  getAddressByPin: (event: google.maps.MapMouseEvent) => void;
}

export const CustomMap: React.FC<CustomMapProps & ICoordinates> = ({
  coordinates,
  getAddressByPin,
}) => {
  const mapGoogleRef = useRef(undefined);

  const onLoad = React.useCallback(function callback(map: any) {
    mapGoogleRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    mapGoogleRef.current = undefined;
  }, []);

  return (
    <MapContainer>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={getAddressByPin}
      >
        <Marker position={coordinates} />
      </GoogleMap>
    </MapContainer>
  );
};

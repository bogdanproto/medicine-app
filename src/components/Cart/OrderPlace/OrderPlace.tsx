import { CustomMap } from 'components/common/Map/CustomMap';
import { OrderForm } from '../OrderForm/OrderForm';
import { OrderPlaceContainer } from './OrderPlace.styled';
import { useState } from 'react';
import { ICoordinates } from 'interfaces';
import { defaultCoordinates } from 'const';
import { getAddressByPinAPI } from 'services/api';

interface OrderPlaceProps {
  isLoaded: boolean;
}

export const OrderPlace: React.FC<OrderPlaceProps> = ({ isLoaded }) => {
  const [coordinates, setCoordinates] = useState(defaultCoordinates);
  const [mapAddress, setMapAddress] = useState('');

  const getCoordinates = (newCoordinates: ICoordinates) => {
    const { coordinates } = newCoordinates;
    setCoordinates(coordinates);
  };

  const getAddressByPin = async (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();

      const address = await getAddressByPinAPI(lat, lng);
      setMapAddress(address);
    }
  };

  return (
    <OrderPlaceContainer>
      {isLoaded && (
        <CustomMap
          coordinates={coordinates}
          getAddressByPin={getAddressByPin}
        />
      )}
      <OrderForm
        isLoaded={isLoaded}
        getCoordinates={getCoordinates}
        mapAddress={mapAddress}
      />
    </OrderPlaceContainer>
  );
};

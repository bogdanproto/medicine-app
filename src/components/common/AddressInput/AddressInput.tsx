import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import { InputForm } from '../InputForm/InputForm.styled';
import { useEffect } from 'react';
import { InputList } from './AddressInput.styled';
import { ICoordinates } from 'interfaces';

interface AddressInputProps {
  isLoaded: boolean;
  mapAddress: string;
  getCoordinates: (coordinates: ICoordinates) => void;
  register: any;
}

export const AddressInput: React.FC<
  AddressInputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ isLoaded, register, mapAddress, getCoordinates, ...props }) => {
  const {
    ready,
    value,
    init,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: 'google-map-script',
    initOnMount: false,
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e: any) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: any) =>
    () => {
      setValue(description, false);
      clearSuggestions();

      getGeocode({ address: description }).then(results => {
        const { lat, lng } = getLatLng(results[0]);
        getCoordinates({ coordinates: { lat, lng } });
      });
    };

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  useEffect(() => {
    if (isLoaded) {
      init();
    }
  }, [init, isLoaded]);

  useEffect(() => {
    if (mapAddress) {
      setValue(mapAddress);
    }
  }, [mapAddress, setValue]);

  return (
    <div ref={ref}>
      <InputForm
        type="text"
        {...register}
        {...props}
        value={value}
        onChange={handleInput}
        disabled={!ready}
      />
      {status === 'OK' && <InputList>{renderSuggestions()}</InputList>}
    </div>
  );
};

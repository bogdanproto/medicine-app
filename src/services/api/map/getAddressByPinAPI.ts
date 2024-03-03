import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const getAddressByPinAPI = async (lat: number, lng: number) => {
  try {
    const { data } = await axios(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`
    );

    if (data.results.length > 0) {
      return data.results[0].formatted_address;
    } else {
      return 'No address found';
    }
  } catch (error) {
    console.error('Error fetching address:', error);
  }
};

import { routePage } from 'const';
import { Navigate } from 'react-router';

export const NotFound = () => {
  return <Navigate to={routePage.BASE} />;
};

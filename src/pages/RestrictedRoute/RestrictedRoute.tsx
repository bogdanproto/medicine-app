import { Navigate } from 'react-router-dom';
import { selectAuthUser } from 'services/redux/authSlice/selectors';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';

interface IPropsPages {
  redirectTo: string;
  component: React.ReactElement;
}

export const RestrictedRoute = ({ component, redirectTo }: IPropsPages) => {
  const { isLoggedIn } = useTypeSelector(selectAuthUser);

  return <>{isLoggedIn ? <Navigate to={redirectTo} /> : component}</>;
};

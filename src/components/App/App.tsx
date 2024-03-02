import { AuthPage } from 'components/Auth';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { routePage } from 'const';
import { NotFound, PrivateRoute, RestrictedRoute } from 'pages';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { refreshUser } from 'services/redux/authSlice/operations';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';

const Shop = lazy(() => import('../../pages/Shop/Shop'));
const Cart = lazy(() => import('../../pages/Cart/Cart'));

export const App = () => {
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path={routePage.BASE}
        element={
          <PrivateRoute
            redirectTo={routePage.LOGIN}
            component={<SharedLayout />}
          />
        }
      >
        <Route index element={<Shop />} />
        <Route path={routePage.CART} element={<Cart />} />
      </Route>

      <Route
        path={routePage.LOGIN}
        element={
          <RestrictedRoute
            redirectTo={routePage.BASE}
            component={<AuthPage />}
          />
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

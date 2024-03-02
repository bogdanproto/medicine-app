import { AuthPage } from 'components/Auth';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { routePage } from 'const';
import { NotFound, PrivateRoute, RestrictedRoute } from 'pages';
import { lazy } from 'react';
import { Route, Routes } from 'react-router';

const Shop = lazy(() => import('../../pages/Shop/Shop'));
const Cart = lazy(() => import('../../pages/Cart/Cart'));

export const App = () => {
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

import { AuthPage } from 'components/Auth';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { routePage } from 'const';
import { NotFound, PrivateRoute, RestrictedRoute } from 'pages';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import { refreshUser } from 'services/redux/authSlice/operations';
import { selectIsAppLoaded } from 'services/redux/authSlice/selectors';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';

const Shop = lazy(() => import('../../pages/Shop/Shop'));
const Cart = lazy(() => import('../../pages/Cart/Cart'));
const History = lazy(() => import('../../pages/History/History'));

export const App = () => {
  const dispatch = useTypeDispatch();
  const isAppLoaded = useTypeSelector(selectIsAppLoaded);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isAppLoaded && (
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
            <Route path={routePage.HISTORY} element={<History />} />
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
      )}
    </>
  );
};

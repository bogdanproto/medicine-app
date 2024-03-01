import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { routePage } from 'const';
import { NotFound } from 'pages';
import { lazy } from 'react';
import { Route, Routes } from 'react-router';

const Shop = lazy(() => import('../../pages/Shop/Shop'));
const Cart = lazy(() => import('../../pages/Cart/Cart'));

export const App = () => {
  return (
    <Routes>
      <Route path={routePage.BASE} element={<SharedLayout />}>
        <Route index element={<Shop />} />
        <Route path={routePage.CART} element={<Cart />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

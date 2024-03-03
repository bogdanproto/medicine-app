import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { AppContainer } from './SharedLayout.styled';
import { Header } from 'components/Header/Header';
import { Notify } from 'components/common';

export const SharedLayout = () => {
  return (
    <AppContainer>
      <Notify />
      <Header />

      <Suspense>
        <Outlet />
      </Suspense>
    </AppContainer>
  );
};

import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { AppContainer } from './SharedLayout.styled';
import { Header } from 'components/Header/Header';

export const SharedLayout = () => {
  return (
    <AppContainer>
      <Header />

      <Suspense>
        <Outlet />
      </Suspense>
    </AppContainer>
  );
};

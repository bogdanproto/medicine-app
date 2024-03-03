import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { SharedContainer } from './SharedLayout.styled';
import { Header } from 'components/Header/Header';

export const SharedLayout = () => {
  return (
    <SharedContainer>
      <Header />

      <Suspense>
        <Outlet />
      </Suspense>
    </SharedContainer>
  );
};

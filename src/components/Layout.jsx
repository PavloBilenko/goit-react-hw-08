import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Outlet />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

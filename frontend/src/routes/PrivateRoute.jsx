import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { appRoutes } from './routes';

const PrivateRoute = () => (
  localStorage.getItem('user')
    ? <Outlet />
    : <Navigate to={appRoutes.loginPagePath()} />
);

export default PrivateRoute;

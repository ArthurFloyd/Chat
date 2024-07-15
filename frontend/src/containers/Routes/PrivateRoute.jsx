import { Navigate } from 'react-router-dom';

import useAuthContext from '../../hooks/useAuthContext.js';
import { appRoutes } from './routesPath.js';

const PrivateRoute = ({ children }) => {
  const { isAuthed } = useAuthContext();

  return isAuthed ? children : <Navigate to={appRoutes.loginPagePath()} />;
};

export default PrivateRoute;

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
// import { ToastContainer, Slide } from 'react-toastify';
import { Provider, ErrorBoundary } from '@rollbar/react';

import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login.jsx';
import AppContainer from './components/AppContainer.jsx';
import PrivateRoute from './containers/Routes/PrivateRoute.jsx';
import Home from './pages/Home.jsx';
import SignUp from './pages/SignUp.jsx';
import NavBar from './components/NavBar.jsx';

// import ChatPage from './XXcomponents/Chat/ChatPage.jsx';
// import LoginPage from './XXcomponents/LogIn/LoginPage.jsx';
// import NotFoundPage from './XXcomponents/Errors/NotFoundPage.jsx';
// import SignUpPage from './XXcomponents/SignUp/SignUpPage.jsx';
// import NavBar from './common/NavBar.jsx';

// import PrivateRoute from './routes/PrivateRoute.jsx';
// import PublicRoute from './routes/PublicRoute.jsx';
// import { appRoutes } from './routes/routes.js';

const rollbarConfig = {
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  environment: 'production',
};

const App = () => (
  <Provider config={rollbarConfig}>
    <ErrorBoundary>
      <BrowserRouter>
        <AppContainer>
          <NavBar />
          <Routes>
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>
);

export default App;

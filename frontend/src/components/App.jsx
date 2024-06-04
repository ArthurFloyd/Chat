// import '../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import NotFoundPage from './Errors/NotFoundPage.jsx';
import LoginPage from './Login/LoginPage.jsx';

import { appRoutes } from '../routes/routes.js';

const ChatPage = () => <div>Тут скоро будет чат</div>;
const SignupPage = () => <div>Тут скоро будет регистрация</div>;

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={appRoutes.notFoundPagePath()} element={<NotFoundPage />} />
      <Route path={appRoutes.chatPagePath()} element={<ChatPage />} />
      <Route path={appRoutes.loginPagePath()} element={<LoginPage />} />
      <Route path={appRoutes.signupPagePath()} element={<SignupPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;

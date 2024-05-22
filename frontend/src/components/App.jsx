// import '../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFoundPage from './Errors/NotFoundPage.jsx';
import LoginPage from './Login/LoginPage.jsx';

import pathRoutes from '../routes/routes.js';

const ChatPage = () => <div>Тут скоро будет чат</div>

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pathRoutes.notFoundPagePath()} element={<NotFoundPage />} />
        <Route path={pathRoutes.chatPagePath()} element={<ChatPage />} />
        <Route path={pathRoutes.loginPagePath()} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

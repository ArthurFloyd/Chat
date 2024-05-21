// import '../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFoundPage from './Errors/NotFoundPage.jsx';

const ChatPage = () => <div>1</div>
const LoginPage = () => <div>2</div>
// const ErrorPage = () => <div></div>

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

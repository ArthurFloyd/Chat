import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import Init from './init.jsx';

const app = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(Init());
};

app();

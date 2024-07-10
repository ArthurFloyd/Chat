import ReactDOM from 'react-dom/client';
import Init from './Init';

const app = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(Init());
};

app();

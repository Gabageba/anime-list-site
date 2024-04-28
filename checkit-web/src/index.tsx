import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback="...is loading">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
);

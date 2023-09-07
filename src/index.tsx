import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@styles/index.scss';
import './i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  </React.StrictMode>,
);

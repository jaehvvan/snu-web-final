import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/reset.scss';
import './styles/normalize.scss';
import './styles/scoreBoard.scss';
import './styles/fonts.css';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';

import './styles/finishPage.css';
import './styles/fonts.css';
import './styles/index.scss';
import './styles/musicPlayer.scss';
import './styles/normalize.scss';
import './styles/questionPage.scss';
import './styles/questionProgress.scss';
import './styles/reset.scss';
import './styles/scoreBoard.scss';
import './styles/setting.css';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);

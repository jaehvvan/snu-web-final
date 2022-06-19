import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';

import './styles/reset.scss';
import './styles/normalize.scss';
import './styles/setting.css';
import './styles/fonts.css';
import './styles/index.scss';
import './styles/scoreBoard.scss';
import './styles/questionProgress.scss';
import './styles/musicPlayer.scss';
import './styles/hintButton.scss';
import './styles/hintModal.scss';

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

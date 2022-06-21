import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';

import './styles/reset.scss';
import './styles/normalize.scss';
import './styles/finish.css';
import './styles/fonts.css';
import './styles/index.scss';
import './styles/musicPlayer.scss';
import './styles/questionPage.scss';
import './styles/questionProgress.scss';
import './styles/musicPlayer.scss';
import './styles/hintButton.scss';
import './styles/hintModal.scss';
import './styles/scoreBoard.scss';
import './styles/setting.css';
import { theme } from './styles/config';

import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);

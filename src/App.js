import { Route, Routes } from 'react-router-dom';

import FinishPage from './pages/FinishPage';
import LandingPage from './pages/LandingPage';
import QuestionPage from './pages/QuestionPage';
import SettingPage from './pages/SettingPage';
import YoutubePage from './pages/YoutubePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/setting" element={<SettingPage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/youtube" element={<YoutubePage />} />
      <Route path="/finish" element={<FinishPage />} />
    </Routes>
  );
}

export default App;

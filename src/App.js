import { Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import ErrorPage from './pages/ErrorPage';
import FinishPage from './pages/FinishPage';
import LandingPage from './pages/LandingPage';
import QuestionPage from './pages/QuestionPage';
import SettingPage from './pages/SettingPage';
import YoutubePage from './pages/YoutubePage';
import { AtomUser } from './store/atom';

function App() {
  const user = useRecoilValue(AtomUser);
  if (user === undefined) {
    return <LandingPage />;
  }
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/setting" element={<SettingPage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/youtube" element={<YoutubePage />} />
      <Route path="/finish" element={<FinishPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;

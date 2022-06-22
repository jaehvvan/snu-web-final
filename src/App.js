import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import ErrorPage from './pages/ErrorPage';
import FinishPage from './pages/FinishPage';
import LandingPage from './pages/LandingPage';
import QuestionPage from './pages/QuestionPage';
import SettingPage from './pages/SettingPage';
import YoutubePage from './pages/YoutubePage';
import AnswerPage from './pages/AnswerPage';
import { AtomUser } from './store/atom';
import { useEffect } from 'react';

function App() {
  const user = useRecoilValue(AtomUser);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user && location.pathname !== '/answer') {
      navigate('/');
    }
  }, [user, location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/setting" element={<SettingPage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/youtube" element={<YoutubePage />} />
      <Route path="/finish" element={<FinishPage />} />
      <Route path="/answer" element={<AnswerPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;

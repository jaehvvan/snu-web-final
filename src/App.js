import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import ErrorPage from './pages/ErrorPage';
import FinishPage from './pages/FinishPage';
import LandingPage from './pages/LandingPage';
import QuestionPage from './pages/QuestionPage';
import SettingPage from './pages/SettingPage';
import YoutubePage from './pages/YoutubePage';

const dummy_teams = [
  { id: 0, name: '팀 A', score: 0 },
  { id: 1, name: '팀 B', score: 0 },
  { id: 2, name: '팀 C', score: 0 },
  { id: 3, name: '팀 D', score: 0 },
];

const dummy_musics = [{ id: 'tOtesnkPJeg', timestamp: 1 }];

function App() {
  const [musics, setMusics] = useState(dummy_musics);
  const [index, setIndex] = useState(0);
  const [teams, setTeams] = useState(dummy_teams);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/setting" element={<SettingPage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route
        path="/youtube"
        element={<YoutubePage teams={teams} music={musics[index]} setTeams={setTeams} />}
      />
      <Route path="/finish" element={<FinishPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;

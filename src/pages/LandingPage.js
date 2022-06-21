import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import Description from '../components/Description';
import { signInGoogle } from '../firebaseConfig';
import { AtomMusicIdx, AtomMusics, AtomTeams, AtomUser } from '../store/atom';
import '../styles/landingpage.css';

const LandingPage = () => {
  const resetMusics = useResetRecoilState(AtomMusics);
  const resetMusicIdx = useResetRecoilState(AtomMusicIdx);
  const resetTeams = useResetRecoilState(AtomTeams);
  const [user, setUser] = useRecoilState(AtomUser);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const clearState = () => {
    resetMusicIdx();
    resetMusics();
    resetTeams();
  };

  const handleLogin = async () => {
    clearState();
    try {
      const loginResult = await signInGoogle();
      setUser(loginResult.user);
    } catch (e) {
      console.error(e);
    }
  };

  if (user) {
    return <Navigate to="/setting" />;
  }

  const showDescription = () => {
    setIsModalOpened(true);
  };

  const closeDescription = () => {
    setIsModalOpened(false);
  };

  return (
    <div id="landing">
      <div id="desc">
        <div id="main_title">노래 제목 맞추기 게임</div>
        <div id="main_title_desc">
          <br /> 술자리에서든, MT에서든 <br /> 가벼운 즐거움이 필요한 곳 어디서든 플레이하세요
        </div>
        <div>
          <button className="description_btn" id="start_button" onClick={showDescription}>
            <span>설명보기</span>
          </button>
          <button className="btn" id="start_button" onClick={handleLogin}>
            <span>게임 시작하기</span>
          </button>
          <div id="team_name">made by 6조</div>
        </div>
      </div>
      {isModalOpened && <Description closeDescription={closeDescription} />}
    </div>
  );
};

export default LandingPage;

import { Link } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { signInGoogle } from '../firebaseConfig';
import { AtomMusicIdx, AtomMusics, AtomTeams, AtomUser } from '../store/atom';

const LandingPage = () => {
  const resetMusics = useResetRecoilState(AtomMusics);
  const resetMusicIdx = useResetRecoilState(AtomMusicIdx);
  const resetTeams = useResetRecoilState(AtomTeams);
  const [user, setUser] = useRecoilState(AtomUser);

  const clearState = () => {
    resetMusicIdx();
    resetMusics();
    resetTeams();
  };

  const handleLogin = async () => {
    try {
      const loginResult = await signInGoogle();
      setUser(loginResult.user);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="landing">
      <div id="desc">
        <div id="main_title">노래 제목 맞추기 게임</div>
        <div id="main_title_desc">
          "술자리에서든, MT에서든, {'\n'} 가벼운 즐거움이 필요한 곳 어디서든 플레이하세요"
        </div>
      </div>
      {!user && <div onClick={handleLogin}>Login</div>}
      <Link to="/setting" id="start_button" onClick={clearState}>
        시작
      </Link>
      <div id="team_name">made by 6조</div>
    </div>
  );
};

export default LandingPage;

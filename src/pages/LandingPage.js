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
    <div>
      <div>신서유기 폰트는 과연 제대로 작동할까요?</div>
      {!user && <div onClick={handleLogin}>Login</div>}
      <Link to="/setting" onClick={clearState}>
        시작
      </Link>
    </div>
  );
};

export default LandingPage;

import { Link } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { AtomMusicIdx, AtomMusics, AtomTeams } from '../store/atom';

const LandingPage = () => {
  const resetMusics = useResetRecoilState(AtomMusics);
  const resetMusicIdx = useResetRecoilState(AtomMusicIdx);
  const resetTeams = useResetRecoilState(AtomTeams);

  const clearState = () => {
    resetMusicIdx();
    resetMusics();
    resetTeams();
  };

  return (
    <div>
      <div>신서유기 폰트는 과연 제대로 작동할까요?</div>
      <Link to="/setting" onClick={clearState}>
        시작
      </Link>j
    </div>
  );
};

export default LandingPage;

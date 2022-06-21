import { Fireworks } from 'fireworks/lib/react';
import { Link } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import RankTable from '../components/RankTable';
import {
  AtomCategory,
  AtomMusicIdx,
  AtomMusics,
  AtomproblemCount,
  AtomTeams,
  AtomUser,
  AtomYear,
} from '../store/atom';
import '../styles/finish.css';

const FinishPage = () => {
  let fxProps = {
    count: 6,
    interval: 800,
    particleTimeout: 5000,
    bubbleSizeMaximum: 20,
    bubbleSizeMinimum: 5,
    colors: ['#ff6600', '#ff781f', '#ff8b3d', '#ff9d5c', '#ffaf7a', '#FCAE05'],
    calc: (props, i) => ({
      ...props,
      x: window.innerWidth * Math.random() - 1000,
      y: Math.random() * window.innerHeight - 1000,
    }),
  };

  const resetMusics = useResetRecoilState(AtomMusics);
  const resetMusicIdx = useResetRecoilState(AtomMusicIdx);
  const resetTeams = useResetRecoilState(AtomTeams);
  const resetYear = useResetRecoilState(AtomYear);
  const resetCategory = useResetRecoilState(AtomCategory);
  const resetProblemCount = useResetRecoilState(AtomproblemCount);
  const resetUser = useResetRecoilState(AtomUser);

  const clearState = () => {
    resetMusicIdx();
    resetMusics();
    resetTeams();
    resetYear();
    resetCategory();
    resetProblemCount();
  };

  const signOut = () => {
    resetUser();
    localStorage.clear();
  };

  return (
    <div id="finishing">
      <RankTable />
      <div id="finish">
        <Fireworks {...fxProps} />
        <h1>게임이 종료되었습니다</h1>
        <div>
          <Link to="/" onClick={clearState}>
            <button className="restart_btn" id="start_button">
              <span>처음으로</span>
            </button>
          </Link>

          <Link to="/" onClick={signOut}>
            <button className="logout_btn" id="start_button">
              <span>로그아웃</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinishPage;

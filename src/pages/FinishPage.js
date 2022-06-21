import { Fireworks } from 'fireworks/lib/react';
import { Link } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import MaterialTable from '../components/RankTable';
import {AtomCategory, AtomMusicIdx, AtomMusics, AtomproblemCount, AtomTeams, AtomYear} from '../store/atom';

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
      x: window.innerWidth * Math.random(),
      y: 200 + Math.random() * window.innerHeight - 50 + (i === 2 ? -80 : 0),
    }),
  };

  const resetMusics = useResetRecoilState(AtomMusics);
  const resetMusicIdx = useResetRecoilState(AtomMusicIdx);
  const resetTeams = useResetRecoilState(AtomTeams);
  const resetYear = useResetRecoilState(AtomYear);
  const resetCategory = useResetRecoilState(AtomCategory);
  const resetProblemCount = useResetRecoilState(AtomproblemCount);

  const clearState = () => {
    resetMusicIdx();
    resetMusics();
    resetTeams();
    resetYear();
    resetCategory();
    resetProblemCount();
  };

  return (
    <div id="finishing">
      <div>
        <Fireworks {...fxProps} />
        <h1>게임이 종료되었습니다</h1>
        <Link to="/" onClick={clearState}>
          처음으로
        </Link>
      </div>
      <RankTable />
    </div>
  );
};

export default FinishPage;

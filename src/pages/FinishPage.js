import { Fireworks } from 'fireworks/lib/react';
import '../styles/finishPage.css';
import MaterialTable from '../components/RankTable';

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

  return (
    <div id="finishing">
      <div>
        <Fireworks {...fxProps} />
        <h1 class="ment">게임이 종료되었습니다</h1>
      </div>
      {/*<div id="rank"> rankinggggggg #1 #2 #3 #4</div>*/}
      <MaterialTable class="table" />
    </div>
  );
};

export default FinishPage;

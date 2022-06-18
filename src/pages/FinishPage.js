import { Fireworks } from 'fireworks/lib/react';
import '../styles/finishPage.css';
import { useRecoilState } from 'recoil';
import { AtomTeams } from '../store/atom';
import Rank from '../components/Rank';

const FinishPage = () => {
  let fxProps = {
    count: 6,
    interval: 800,
    particleTimeout: 5000,
    bubbleSizeMaximum: 20,
    bubbleSizeMinimum: 5,
    colors: ['#ff6600', '#ff781f', '#ff8b3d', '#ff9d5c', '#ffaf7a', '#FCAE05'],
    // colors: ['#cc3333', '#4CAF50', '#81C784'],
    calc: (props, i) => ({
      ...props,
      x: window.innerWidth * Math.random(),
      y: 200 + Math.random() * window.innerHeight - 50 + (i === 2 ? -80 : 0),
    }),
  };

  const [teams, setTeams] = useRecoilState(AtomTeams);
  console.log(teams);
  let sorted = [...teams];

  sorted = sorted.sort(function (first, second) {
    return second.score - first.score;
  });
  console.log(sorted);

  return (
    <div>
      <Fireworks {...fxProps} />
      <div id="finish_text">
        <h1 id="ment">게임이 종료되었습니다</h1>

        {sorted.map(({ id, name, score }) => {
          return (
            <div className="ScoreBoard">
              <Rank name={name} score={score} />
            </div>
          );
        })}

        <div id="rank"> rankinggggggg #1 #2 #3 #4</div>
      </div>
    </div>
  );
};

export default FinishPage;

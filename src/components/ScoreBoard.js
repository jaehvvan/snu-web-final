import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { AcurQuestionIdx } from '../store/atom';

const ScoreBoard = () => {
  const dummy_teams = [
    { id: 0, name: '팀 A', score: 0 },
    { id: 1, name: '팀 B', score: 0 },
    { id: 2, name: '팀 C', score: 0 },
    { id: 3, name: '팀 D', score: 0 },
  ];

  const [teams, setTeams] = useState(dummy_teams);
  const [curQuestionIdx, setCurQuestionIdx] = useRecoilState(AcurQuestionIdx);

  const handleClick = (e) => {
    const { name: teamId } = e.currentTarget;
    console.dir(curQuestionIdx);
    setCurQuestionIdx((curIdx) => curIdx + 1);
    setTeams(
      teams.map((team) => (team.id === +teamId ? { ...team, score: team.score + 1 } : team)),
    );
  };

  return (
    <header className="ScoreBoard">
      {teams.map(({ id, name, score }) => {
        return (
          <button
            key={id}
            name={id}
            className="ScoreBoard__btn"
            onClick={handleClick}
            type="button"
          >
            <div className="ScoreBoard__team">{name}</div>
            <div className="ScoreBoard__score">{score}</div>
          </button>
        );
      })}
    </header>
  );
};

export default ScoreBoard;

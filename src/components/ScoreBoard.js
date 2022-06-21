import { useRecoilState } from 'recoil';
import { AtomTeams } from '../store/atom';
import Team from './Team';

const ScoreBoard = () => {
  const [teams, setTeams] = useRecoilState(AtomTeams);

  const handleClick = (teamId) => {
    console.log(teams);
    setTeams(teams.map((team) => (team.id === teamId ? { ...team, score: team.score + 1 } : team)));
  };

  return (
    <div className="ScoreBoard">
      {teams.map(({ id, name, score }) => {
        return (
          <div className="ScoreBoard__team">
            <Team onClickTeam={() => handleClick(id)} name={name} score={score} />
          </div>
        );
      })}
    </div>
  );
};

export default ScoreBoard;

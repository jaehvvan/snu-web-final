import { Grid } from '@mui/material';
import { useRecoilState } from 'recoil';
import { AtomTeams } from '../store/atom';
import Team from './Team';

const ScoreBoard = () => {
  const [teams, setTeams] = useRecoilState(AtomTeams);

  const handleClick = (teamId) => {
    setTeams(teams.map((team) => (team.id === teamId ? { ...team, score: team.score + 1 } : team)));
  };

  return (
    <div className="ScoreBoard">
      {teams.map(({ id, name, score }) => {
        return (
          <Grid item xs={12 / teams.length} key={id}>
            <Team onClickTeam={() => handleClick(id)} name={name} score={score} />
          </Grid>
        );
      })}
    </div>
  );
};

export default ScoreBoard;

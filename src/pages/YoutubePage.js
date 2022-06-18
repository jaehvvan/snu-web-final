import YoutubeModal from '../components/YoutubePlayer';
import { Link} from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import Team from '../components/Team';
import { useState } from 'react';
import '../styles/card.css';

const YoutubePage = ({music, teams, setTeams, isLast}) => {
  const [changed, setChanged] = useState(false);

  const increaseScore = (index) => {
    if (!changed) {
      setTeams(
        teams.map((team, idx) => (idx === index ? { ...team, score: team.score + 1 } : team)),
      );
      setChanged(true);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {teams.map((team, idx) => (
          <Grid item xs={12 / teams.length} key={team.name}>
            <Team onClickTeam={() => increaseScore(idx)} name={team.name} score={team.score} />
          </Grid>
        ))}
        <Grid item xs={8}>
          <YoutubeModal videoID={music.id} timestamp={music.timestamp} />
          <Link to={isLast ? '/finish' : '/question'}>Next</Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default YoutubePage;

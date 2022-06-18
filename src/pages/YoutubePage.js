import YoutubeModal from '../components/YoutubeModal';
import { Link, Navigate } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import Team from '../components/Team';
import { useState } from 'react';
import '../styles/card.css';

const YoutubePage = () => {
  const currentIndex = 0;
  const musics = [{ ID: 'tOtesnkPJeg', timestamp: 10 }];
  const [changed, setChanged] = useState(false);
  const [teams, setTeams] = useState([
    { name: 'test', score: 1 },
    { name: 'test2', score: 2 },
    { name: 'test4', score: 1 }
  ]);

  const increaseScore = (index) => {
    if (!changed) {
      setTeams(
        teams.map((team, idx) => (idx === index ? { ...team, score: team.score + 1 } : team)),
      );
      setChanged(true);
    }
  };

  if (musics === null) {
    console.error('Fuck!');
    return <Navigate to="/errorPage" />;
  }

  const isLast = currentIndex === musics.length - 1;
  const music = musics[currentIndex];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {teams.map((team, idx) => (
          <Grid item xs={12 / teams.length} key={team.name}>
            <Team onClickTeam={() => increaseScore(idx)} name={team.name} score={team.score} />
          </Grid>
        ))}
        <Grid item xs={8}>
          <YoutubeModal videoID={music.ID} timestamp={music.timestamp} />
          <Link to={isLast ? '/finish' : '/question'}>Next</Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default YoutubePage;

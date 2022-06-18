import YoutubeModal from '../components/YoutubePlayer';
import { Link } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import { AtomMusics, AtomMusicIdx } from '../store/atom';
import { useRecoilState } from 'recoil';
import '../styles/card.css';
import ScoreBoard from '../components/ScoreBoard';

const YoutubePage = () => {
  const [musics, setMusics] = useRecoilState(AtomMusics);
  const [musicIdx, setMusicIdx] = useRecoilState(AtomMusicIdx);

  const music = musics[musicIdx];
  const isLast = musics.length === musicIdx - 1;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <ScoreBoard />
        <Grid item xs={8}>
          <YoutubeModal videoID={music.id} timestamp={music.timestamp} />
          <Link to={isLast ? '/finish' : '/question'}>Next</Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default YoutubePage;

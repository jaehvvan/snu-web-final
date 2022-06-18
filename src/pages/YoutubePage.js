import { Box, Grid } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import ScoreBoard from '../components/ScoreBoard';
import YoutubeModal from '../components/YoutubePlayer';
import { AtomMusicIdx, AtomMusics } from '../store/atom';
import '../styles/card.css';

const YoutubePage = () => {
  const [musics, setMusics] = useRecoilState(AtomMusics);
  const [musicIdx, setMusicIdx] = useRecoilState(AtomMusicIdx);

  if (musicIdx >= musics.length) {
    return <Navigate to="/finish" />;
  }

  const music = musics[musicIdx];
  const isLast = musics.length === musicIdx - 1;

  return (
    <div>
      <ScoreBoard />
      <Grid item xs={8}>
        <YoutubeModal videoID={music.id} timestamp={music.timestamp} />
        <Link
          to={isLast ? '/finish' : '/question'}
          onClick={() => setMusicIdx(isLast ? musicIdx : musicIdx + 1)}
        >
          Next
        </Link>
      </Grid>
    </div>
  );
};

export default YoutubePage;

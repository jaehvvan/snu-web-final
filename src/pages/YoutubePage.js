import { Grid } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import ScoreBoard from '../components/ScoreBoard';
import YoutubeModal from '../components/YoutubePlayer';
import { AtomMusicIdx, AtomMusics } from '../store/atom';
import '../styles/card.css';

const YoutubePage = () => {
  const musics = useRecoilValue(AtomMusics);
  const [musicIdx, setMusicIdx] = useRecoilState(AtomMusicIdx);

  if (musicIdx >= musics.length) {
    return <Navigate to="/finish" />;
  }

  const music = musics[musicIdx];
  const isLast = musics.length === musicIdx + 1;

  return (
    <div className="QuestionPage">
      <ScoreBoard />
      <Grid item xs={8}>
        <h2 style={{ fontSize: '32px', textAlign: 'center', margin: '20px' }}>
          "{music.title}" by {music.artist} ({music.year})
        </h2>
        <YoutubeModal videoURL={music.youtube_music_url} />
        <button className="logout_btn">
          <Link
            to={isLast ? '/finish' : '/question'}
            onClick={() => setMusicIdx(isLast ? musicIdx : musicIdx + 1)}
          >
            <span>다음 문제</span>
          </Link>
        </button>
      </Grid>
    </div>
  );
};

export default YoutubePage;

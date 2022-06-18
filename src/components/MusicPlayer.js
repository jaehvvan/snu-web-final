import { Grid } from '@mui/material';
import { useState } from 'react';
import ReactPlayer from 'react-player';

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = (e) => {
    const { name: length } = e.currentTarget;
    setPlaying(true);
    setTimeout(() => {
      setPlaying(false);
    }, +length);
  };

  return (
    <Grid item>
      <div className="MusicPlayer">
        <div className="MusicPlayer__youtube">
          <ReactPlayer
            playing={playing}
            url={'https://www.youtube.com/watch?v=cLQ63H538Qw'}
            config={{ youtube: { playerVars: { origin: 'https://www.youtube.com' } } }}
          />
        </div>
        <div className="MusicPlayer__img"></div>
        <div className="MusicPlayer__btnContainer">
          <button className="MusicPlayer__btn" name="1000" onClick={handlePlay}>
            1초 듣기
          </button>
          <button className="MusicPlayer__btn" name="2000" onClick={handlePlay}>
            2초 듣기
          </button>
          <button className="MusicPlayer__btn" name="999999" onClick={handlePlay}>
            전체 듣기
          </button>
        </div>
      </div>
    </Grid>
  );
};

export default MusicPlayer;

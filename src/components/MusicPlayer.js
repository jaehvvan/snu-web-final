import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { AtomMusicIdx, AtomMusics } from '../store/atom';

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const musics = useRecoilValue(AtomMusics);
  const musicIdx = useRecoilValue(AtomMusicIdx);

  const music = musics[musicIdx];

  const handlePlay = (e) => {
    const { name: length } = e.currentTarget;
    setPlaying(true);
    setTimeout(() => {
      setPlaying(false);
    }, +length);
  };

  const togglePlay = () => {
    setPlaying(!playing);
  };

  return (
    <div className="MusicPlayer">
      <div className="MusicPlayer__youtube">
        <ReactPlayer
          playing={playing}
          url={music.youtube_music_url}
          config={{ youtube: { playerVars: { origin: 'https://www.youtube.com' } } }}
        />
      </div>
      <div className="MusicPlayer__img" onClick={togglePlay}></div>
      <div className="MusicPlayer__controlContainer">
        <div className="MusicPlayer__controls">
          <button className="MusicPlayer__btn" name="500" onClick={handlePlay}>
            1초 듣기
          </button>
          <button className="MusicPlayer__btn" name="1500" onClick={handlePlay}>
            2초 듣기
          </button>
          <button className="MusicPlayer__btn" name="999999" onClick={handlePlay}>
            전체 듣기
          </button>
        </div>
        <Link className="MusicPlayer__anchor" to="/youtube">
          정답 공개
        </Link>
      </div>
    </div>
  );
};

export default MusicPlayer;

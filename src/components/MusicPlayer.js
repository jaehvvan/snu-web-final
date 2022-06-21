import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { AtomMusicIdx, AtomMusics } from '../store/atom';

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [curTimerId, setCurTimerId] = useState(null);
  const musics = useRecoilValue(AtomMusics);
  const musicIdx = useRecoilValue(AtomMusicIdx);

  const music = musics[musicIdx];

  const handlePlay = (e) => {
    const { name: length } = e.currentTarget;
    clearTimeout(curTimerId);

    setPlaying(true);
    const timerId = setTimeout(() => {
      setPlaying(false);
    }, +length);

    setCurTimerId(timerId);
  };

  const stopPlay = () => {
    if (!playing) return;

    clearTimeout(curTimerId);
    setPlaying(false);
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
      <div
        className={`MusicPlayer__img ${
          playing ? 'MusicPlayer__img--playing' : 'MusicPlayer__img--stop'
        }`}
        onClick={stopPlay}
      />
      <div className="MusicPlayer__controlContainer">
        <div className="MusicPlayer__controls">
          <button className="MusicPlayer__btn" name="500" onClick={handlePlay}>
            <span>1초 듣기</span>
          </button>
          <button className="MusicPlayer__btn" name="1500" onClick={handlePlay}>
            <span>2초 듣기</span>
          </button>
          <button className="MusicPlayer__btn" name="999999" onClick={handlePlay}>
            <span>전체 듣기</span>
          </button>
        </div>
        <Link className="MusicPlayer__anchor" to="/youtube">
          <span>정답 공개</span>
        </Link>
      </div>
    </div>
  );
};

export default MusicPlayer;

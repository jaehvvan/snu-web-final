import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { AtomMusicIdx, AtomMusics } from '../store/atom';

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [curTimerId, setCurTimerId] = useState(null);
  const [isError, setIsError] = useState(false);
  const musics = useRecoilValue(AtomMusics);
  const musicIdx = useRecoilValue(AtomMusicIdx);

  const music = musics[musicIdx];

  useEffect(() => {
    return () => {
      clearTimeout(curTimerId);
    };
  }, []);

  const handlePlay = (e) => {
    const { name: length } = e.currentTarget;
    clearTimeout(curTimerId);

    setPlaying(true);
    const timerId = setTimeout(() => {
      setPlaying(false);
    }, +length);

    setCurTimerId(timerId);
  };

  const stopPlaying = () => {
    clearTimeout(curTimerId);
    setPlaying(false);
    setIsError(true);
    setTimeout(() => {
      setIsError(false);
    }, 500);
  };

  return (
    <div className="MusicPlayer">
      <div className="MusicPlayer__youtube">
        {isError ? null : <ReactPlayer playing={playing} url={music.youtube_music_url} />}
      </div>
      <div
        className={`MusicPlayer__img ${
          playing ? 'MusicPlayer__img--playing' : 'MusicPlayer__img--stop'
        }`}
        onClick={stopPlaying}
      />
      <div className="MusicPlayer__controlContainer">
        <div className="MusicPlayer__controls">
          <button className="MusicPlayer__btn" name="600" onClick={handlePlay}>
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

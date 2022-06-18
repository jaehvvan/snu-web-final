import YoutubeModal from '../components/YoutubeModal';
import { Link, Navigate } from 'react-router-dom';

const YoutubePage = () => {
  const currentIndex = 0;
  const musics = [{ ID: 'tOtesnkPJeg', timestamp: 10 }];

  if (musics === null) {
    console.error('Fuck!');
    return <Navigate to="/errorPage" />;
  }

  const isLast = currentIndex === musics.length - 1;
  const music = musics[currentIndex];

  return (
    <div>
      <YoutubeModal videoID={music.ID} timestamp={music.timestamp} />
      <Link to={isLast ? '/finish' : '/question'}>Next</Link>
    </div>
  );
};

export default YoutubePage;

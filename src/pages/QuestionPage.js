import QuestionProgress from '../components/QuestionProgress';
import ScoreBoard from '../components/ScoreBoard';
import MusicPlayer from '../components/MusicPlayer';
import Hint from '../components/Hint';
import { Link } from 'react-router-dom';

const QuestionPage = () => {
  return (
    <div>
      <ScoreBoard />
      <QuestionProgress />
      <MusicPlayer />
      <Hint />
      <Link to="/youtube">정답 공개</Link>
    </div>
  );
};

export default QuestionPage;

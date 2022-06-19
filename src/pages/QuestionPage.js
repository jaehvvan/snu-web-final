import { Link } from 'react-router-dom';
import Hint from '../components/Hint';
import MusicPlayer from '../components/MusicPlayer';
import QuestionProgress from '../components/QuestionProgress';
import ScoreBoard from '../components/ScoreBoard';

const QuestionPage = () => {
  return (
    <div className="QuestionPage">
      <ScoreBoard />
      <QuestionProgress />
      <MusicPlayer />
      <div className="QuestionPage__footer">
        <Hint />
      </div>
    </div>
  );
};

export default QuestionPage;

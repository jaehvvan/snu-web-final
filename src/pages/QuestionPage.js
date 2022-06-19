import { Link } from 'react-router-dom';
import HintButton from '../components/HintButton';
import MusicPlayer from '../components/MusicPlayer';
import QuestionProgress from '../components/QuestionProgress';
import ScoreBoard from '../components/ScoreBoard';

const QuestionPage = () => {
  return (
    <div className="QuestionPage">
      <ScoreBoard />
      <QuestionProgress />
      <MusicPlayer />
      <HintButton />
      <Link to="/youtube">정답 공개</Link>
    </div>
  );
};

export default QuestionPage;

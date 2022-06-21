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
    </div>
  );
};

export default QuestionPage;

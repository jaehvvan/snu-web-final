import { useRecoilValue } from 'recoil';
import { AtomMusicIdx } from '../store/atom';

const QuestionProgress = () => {
  const musicIdx = useRecoilValue(AtomMusicIdx);
  const totalQuestionCnt = 5;

  return (
    <div className="QuestionProgress">
      {musicIdx} / {totalQuestionCnt}
    </div>
  );
};

export default QuestionProgress;

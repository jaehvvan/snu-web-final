import { useRecoilValue } from 'recoil';
import { AtomMusicIdx, AtomproblemCount } from '../store/atom';

const QuestionProgress = () => {
  const musicIdx = useRecoilValue(AtomMusicIdx);
  const problemCnt = useRecoilValue(AtomproblemCount);

  return (
    <div className="QuestionProgress">
      {musicIdx + 1} / {problemCnt}
    </div>
  );
};

export default QuestionProgress;

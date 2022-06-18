import React from 'react';

const QuestionProgress = () => {
  const curQuestionIdx = 1;
  const totalQuestionCnt = 5;

  return (
    <div>
      {curQuestionIdx} / {totalQuestionCnt}
    </div>
  );
};

export default QuestionProgress;

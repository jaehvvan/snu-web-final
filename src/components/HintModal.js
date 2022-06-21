import React, { useState } from 'react';

const HintModal = ({ closeHintModal }) => {
  const [isHintVisible, setIsHintVisible] = useState(false);
  const [selectedHintId, setSelectedHintId] = useState(-1);

  const hintTypes = [
    { id: 0, content: '아티스트 공개' },
    { id: 1, content: '노래 제목 길이 공개' },
    { id: 2, content: '몇 년도 노래' },
    { id: 3, content: '멤버 수' },
  ];

  const renderHintList = () => {
    return (
      <ul className="HintModal__list">
        {hintTypes.map(({ id, content }) => (
          <li key={id} data-hint-id={id} className="HintModal__item" onClick={showHint}>
            {content}
          </li>
        ))}
      </ul>
    );
  };

  const renderHintItem = () => {
    return (
      <>
        <div className="HintModal__type">{hintTypes[selectedHintId].content}</div>
        <div className="HintModal__desc">힌트는 OO 입니다.</div>
        <button className="HintModal__backBtn" onClick={hideHint}>
          뒤로 가기
        </button>
      </>
    );
  };

  const showHint = (e) => {
    const { hintId } = e.currentTarget.dataset;
    setIsHintVisible(true);
    setSelectedHintId(hintId);
  };

  const hideHint = () => {
    setIsHintVisible(false);
    setSelectedHintId(-1);
  };

  return (
    <>
      <div className="HintModal__background"></div>
      <div className="HintModal">
        <div className="HintModal__header">
          <div className="HintModal__title">어떤 힌트?</div>
          <button className="HintModal__closeBtn" onClick={closeHintModal} type="button">
            <i className="HintModal__closeIcon" />
          </button>
        </div>
        {!isHintVisible ? renderHintList() : renderHintItem()}
      </div>
    </>
  );
};

export default HintModal;

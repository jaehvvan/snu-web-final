import React from 'react';

const Description = ({ closeDescription }) => {
  return (
    <>
      <div className="Description">
        <div className="Description__header">
          <div className="Description__title">Rule</div>
          <button className="Description__closeBtn" onClick={closeDescription}>
            <i className="Description__closeIcon" />
          </button>
        </div>
        <ol className="Description__list">
          <li className="Description__item">
            게임을 진행할 사회자가 게임에 참가하는 팀의 수, 각 팀의 이름, 플레이하고 싶은 노래
            개수를 입력한다.
          </li>
          <li className="Description__item">
            노래의 카테고리를 선택한다. (연도별, 장르별, 국가별 선택 가능)
          </li>
          <li className="Description__item">
            선택된 카테고리에서 랜덤으로 선택된 노래가 1초간 재생된다. (사회자에게는 정답을 확인할
            수 있는 링크가 제공됨)
          </li>
          <li className="Description__item">
            노래의 제목을 맞춘 팀이 나오면 사회자가 정답 팀을 선택하고, 이는 스코어보드에 반영된다.
          </li>
          <li className="Description__item">
            노래의 제목을 맞춘 팀이 없을 경우, replay나 pass가 가능함. 게임이 종료되면 최종 스코어가
            보여진다.
          </li>
        </ol>
      </div>
      <div className="Description__background"></div>
    </>
  );
};

export default Description;
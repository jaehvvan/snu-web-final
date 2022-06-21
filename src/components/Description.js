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
            1. 게임을 진행할 사회자를 한 명 뽑아주세요. 각 팀들은 팀명을 정하고 사회자에게 알려주세요.
          </li>
          <li className="Description__item">
            2. 사회자는 팀 수, 팀명을 입력해 주시고 어떤 노래를 맞출지 카테고리(연도, 장르)를 설정하고 문제 수를 정해주세요.
          </li>
          <li className="Description__item">
            3. 모든 게임 설정을 마쳤다면 이제 게임 시작을 할 수 있습니다!
          </li>
          <li className="Description__item">
            (*사회자에게는 정답을 확인할 수 있는 링크가 제공되어 답을 미리 알고 진행해주시면 됩니다.)
          </li>
          <li className="Description__item">
            4. 사회자는 선택한 카테고리에서 랜덤으로 선택된 노래를 1초간 재생해 줍니다.
            문제가 너무 어렵다면 5초 재생, 힌트를 활용해 보세요!
          </li>
          <li className="Description__item">
            5. 정답을 맞춘 팀의 버튼을 눌러주면 해당 팀의 점수가 올라갑니다.
          </li>
          <li className="Description__item">
            6. 끝까지 노래의 제목을 맞춘 팀이 없을 경우, replay나 pass가 가능합니다.
          </li>
          <li className="Description__item">
            7. 문제를 끝까지 다 풀면 게임이 종료되고 최종 스코어가 보여진다.
          </li>
        </ol>
      </div>
      <div className="Description__background"></div>
    </>
  );
};

export default Description;

import React, { useEffect, useState } from 'react';
import musicData from '../components/Music.json';

const AnswerPage = () => {
  const [searchParams, setSearchParams] = useState(null);
  const [isValidAccess, setIsValidAccess] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkIsValidAccess();
    setIsLoading(false);
  }, []);

  const checkIsValidAccess = () => {
    try {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const indexes = urlSearchParams.get('index').split(',');
      const sum = indexes.slice(0, indexes.length - 1).reduce((acc, val) => acc + +val, 0);
      const checkSum = +indexes[indexes.length - 1];

      if ((sum % 96) + 1 !== checkSum) {
        setIsValidAccess(false);
      } else {
        setSearchParams(indexes.slice(0, indexes.length - 1));
      }
    } catch {
      setIsValidAccess(false);
    }
  };

  const renderList = () => {
    return (
      <ul className="AnswerPage__list">
        {searchParams.map((idxParam, i) => createItem(musicData[idxParam], i))}
      </ul>
    );
  };

  const createItem = (data, i) => {
    const { artist, category, year, title } = data;

    return (
      <li className={`AnswerPage__item ${i % 2 === 0 ? 'AnswerPage__item--color' : ''}`}>
        <div className="AnswerPage__row AnswerPage__row--odd">
          <div className="AnswerPage__key">No.</div>
          <div className="AnswerPage__val">{i + 1}</div>
        </div>
        <div className="AnswerPage__row">
          <div className="AnswerPage__key">artist</div>
          <div className="AnswerPage__val">{artist}</div>
        </div>
        <div className="AnswerPage__row AnswerPage__row--odd">
          <div className="AnswerPage__key">category</div>
          <div className="AnswerPage__val">{category}</div>
        </div>
        <div className="AnswerPage__row">
          <div className="AnswerPage__key">year</div>
          <div className="AnswerPage__val">{year}</div>
        </div>
        <div className="AnswerPage__row AnswerPage__row--odd">
          <div className="AnswerPage__key">title</div>
          <div className="AnswerPage__val">{title}</div>
        </div>
      </li>
    );
  };

  if (isLoading) {
    return null;
  }

  if (!isValidAccess) {
    alert('비정상적인 접근입니다.');
    return null;
  }

  return <div className="AnswerPage">{renderList()}</div>;
};

export default AnswerPage;

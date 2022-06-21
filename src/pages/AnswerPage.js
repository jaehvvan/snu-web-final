import React, { useEffect, useState } from 'react';

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
      const sum = indexes.reduce((acc, val) => acc + +val, 0);
      const result = +indexes[indexes.length - 1];

      if (sum - result !== result) {
        setIsValidAccess(false);
      } else {
        setSearchParams(indexes.slice(0, indexes.length - 1));
      }
    } catch {
      setIsValidAccess(false);
    }
  };

  const dummy_data = [
    { artist: 'jin1', category: 'POP', year: 1990, title: 'web1' },
    { artist: 'jin2', category: 'POP', year: 1991, title: 'web2' },
    { artist: 'jin3', category: 'POP', year: 1990, title: 'web3' },
    { artist: 'jin4', category: 'K-POP', year: 1991, title: 'web4' },
    { artist: 'jin5', category: 'K-POP', year: 1990, title: 'we5' },
    { artist: 'jin6', category: 'K-POP', year: 1991, title: 'web6' },
  ];

  const renderList = () => {
    return (
      <ul className="AnswerPage__list">
        {searchParams.map((idxParam, i) => createItem(dummy_data[idxParam], i))}
      </ul>
    );
  };

  const createItem = (data, i) => {
    const { artist, category, year, title } = data;

    return (
      <li className={`AnswerPage__item ${i % 2 === 0 ? 'AnswerPage__item--color' : ''}`}>
        <div className="AnswerPage__row AnswerPage__row--odd">
          <div className="AnswerPage__key">No.</div>
          <div className="AnswerPage__val">{i}</div>
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

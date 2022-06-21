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
        <li className="AnswerPage__row">
          <div className="AnswerPage__col">No.</div>
          <div className="AnswerPage__col">artist</div>
          <div className="AnswerPage__col">category</div>
          <div className="AnswerPage__col">year</div>
          <div className="AnswerPage__col">title</div>
        </li>
        {searchParams.map((idx, i) => createItem(dummy_data[idx], i))}
      </ul>
    );
  };

  const createItem = (data, i) => {
    const { artist, category, year, title } = data;

    return (
      <li
        key={title}
        className={`AnswerPage__item ${i % 2 === 0 ? 'AnswerPage__item--color' : ''}`}
      >
        <div className="AnswerPage__content">{i}</div>
        <div className="AnswerPage__content">{artist}</div>
        <div className="AnswerPage__content">{category}</div>
        <div className="AnswerPage__content">{year}</div>
        <div className="AnswerPage__content">{title}</div>
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

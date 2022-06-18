import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <div>신서유기 폰트는 과연 제대로 작동할까요?</div>
      <Link to="/setting">시작</Link>
    </div>
  );
};

export default LandingPage;

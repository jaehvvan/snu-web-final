import Fireworks from 'fireworks';

const FinishPage = () => {
  let fxProps = {
    count: 6,
    interval: 800,
    particleTimeout: 5000,
    bubbleSizeMaximum: 20,
    bubbleSizeMinimum: 5,
    colors: ['#ff6600', '#ff781f', '#ff8b3d', '#ff9d5c', '#ffaf7a', '#FCAE05'],
    // colors: ['#cc3333', '#4CAF50', '#81C784'],
    calc: (props, i) => ({
      ...props,
      x: window.innerWidth * Math.random(),
      y: 200 + Math.random() * window.innerHeight - 50 + (i === 2 ? -80 : 0),
    }),
  };

  return (
    <div>
      <div>
        <Fireworks {...fxProps} />
        <h1>게임이 종료되었습니다</h1>
      </div>
      <div>FinishPage</div>
    </div>
  );
};

export default FinishPage;

import { useState } from 'react';
import HintModal from './HintModal';

const HintButton = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const showHintModal = () => {
    setIsModalOpened(true);
  };

  const closeHintModal = () => {
    setIsModalOpened(false);
  };

  return (
    <>
      <button className="HintButton" onClick={showHintModal}>
        Hint
      </button>
      {isModalOpened && <HintModal closeHintModal={closeHintModal} />}
    </>
  );
};

export default HintButton;

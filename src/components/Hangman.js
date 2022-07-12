import { memo } from 'react';
import { Button, Image } from '@chakra-ui/react';
import { MdRefresh } from 'react-icons/md';

const Hangman = ({ src, maxStrikes, won }) => {
  const refreshHandler = () => {
    window.location.reload();
  };
  if (won) {
    return (
      <div>
        <Image src={src} alt='happy person' />
        <Button onClick={refreshHandler} colorScheme='yellow'>
          New Game
        </Button>
      </div>
    );
  }
  if (!maxStrikes) {
    return <Image src={src} alt='still alive' />;
  }

  return (
    <div>
      <Image src={src} alt='end game' />
      <Button
        onClick={refreshHandler}
        colorScheme='yellow'
        rightIcon={<MdRefresh />}
      >
        Try Again
      </Button>
    </div>
  );
};

export default memo(Hangman);

import { memo } from 'react';
import { Button, Image, VStack } from '@chakra-ui/react';
import { MdRefresh } from 'react-icons/md';

const Hangman = ({ src, maxStrikes, won }) => {
  const refreshHandler = () => {
    window.location.reload();
  };
  if (won) {
    return (
      <VStack gap='10px'>
        <Image src={src} alt='happy person' />
        <Button onClick={refreshHandler} colorScheme='yellow'>
          New Game
        </Button>
      </VStack>
    );
  }
  if (!maxStrikes) {
    return <Image src={src} alt='still alive' />;
  }

  return (
    <VStack gap='10px'>
      <Image src={src} alt='end game' />
      <Button
        onClick={refreshHandler}
        colorScheme='yellow'
        rightIcon={<MdRefresh />}
      >
        Try Again
      </Button>
    </VStack>
  );
};

export default memo(Hangman);

import { memo } from 'react';
import { Button, Image, Stack, VStack } from '@chakra-ui/react';
import { BiTired } from 'react-icons/bi';
import { MdRefresh } from 'react-icons/md';
import { FaSmileWink } from 'react-icons/fa';

const refreshHandler = () => {
  window.location.reload();
};

const NewGameButton = () => {
  const startNewGame = () => {
    localStorage.clear();
    refreshHandler();
  };
  return (
    <Button
      onClick={startNewGame}
      colorScheme='yellow'
      rightIcon={<FaSmileWink />}
    >
      <span style={{ marginTop: 2 }}>New Game</span>
    </Button>
  );
};

const Hangman = ({ gaveUp, setGaveUp, src, maxStrikes, won }) => {
  const giveUpHandler = () => {
    localStorage.clear();
    setGaveUp(true);
  };
  if (won) {
    return (
      <VStack gap='10px'>
        <Image src={src} alt='happy person' />
        {<NewGameButton />}
      </VStack>
    );
  }
  if (!maxStrikes) {
    return <Image src={src} alt='still alive' />;
  }

  return (
    <VStack gap='10px' minW={[null, null, null, '450px']}>
      <Image src={src} alt='end game' />
      <Stack direction={['column', 'row']}>
        {gaveUp ? (
          <NewGameButton />
        ) : (
          <>
            <Button
              onClick={giveUpHandler}
              colorScheme='yellow'
              rightIcon={<BiTired />}
            >
              <span style={{ marginTop: 2 }}>Give Up</span>
            </Button>
            <Button
              onClick={refreshHandler}
              colorScheme='yellow'
              rightIcon={<MdRefresh />}
              variant='outline'
            >
              <span style={{ marginTop: 2 }}>Try Again</span>
            </Button>
          </>
        )}
      </Stack>
    </VStack>
  );
};

export default memo(Hangman);

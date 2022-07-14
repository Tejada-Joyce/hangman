import { memo } from 'react';
import { Button, Image, Stack, VStack } from '@chakra-ui/react';
import { MdRefresh } from 'react-icons/md';
import { FaSmileWink } from 'react-icons/fa';

const refreshHandler = () => {
  window.location.reload();
};

const newGameButton = (
  <Button
    onClick={refreshHandler}
    colorScheme='yellow'
    rightIcon={<FaSmileWink />}
  >
    <span style={{ marginTop: 2 }}>New Game</span>
  </Button>
);

const Hangman = ({ src, maxStrikes, won }) => {
  if (won) {
    return (
      <VStack gap='10px'>
        <Image src={src} alt='happy person' />
        {newGameButton}
      </VStack>
    );
  }
  if (!maxStrikes) {
    return <Image src={src} alt='still alive' />;
  }

  return (
    <VStack gap='10px'>
      <Image src={src} alt='end game' />
      <Stack direction={['column', 'row']}>
        {newGameButton}
        <Button
          onClick={refreshHandler}
          colorScheme='yellow'
          rightIcon={<MdRefresh />}
          variant='outline'
        >
          <span style={{ marginTop: 2 }}>Try Again</span>
        </Button>
      </Stack>
    </VStack>
  );
};

export default memo(Hangman);

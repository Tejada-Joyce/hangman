import { useState } from 'react';
import {
  Button,
  FormControl,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  RadioGroup,
  Radio,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { genres } from '../constants';

const Hint = ({ movieData }) => {
  const [optionHint, setOptionHint] = useState('1');
  const [hint, setHint] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(genres);
  const getHintHandler = (e) => {
    e.preventDefault();
    if (optionHint === '1') {
      const genresNames = movieData.genre_ids
        .map((id) => {
          const genreObj = genres.find((genre) => genre.id === id);
          return genreObj.name;
        })
        .join(', ');
      setHint(`This movie has the following genres: ${genresNames} `);
    } else {
      setHint(`This movie was released on ${movieData.release_date} `);
    }
  };
  return (
    <Stack orientation={['column', 'row']}>
      <Button onClick={onOpen}>Give Me a Hint</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {hint ? 'Here is your hint' : 'What hint do you want?'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!hint && (
              <form onSubmit={getHintHandler}>
                <FormControl>
                  <RadioGroup onChange={setOptionHint} value={optionHint}>
                    <Stack direction='row'>
                      <Radio value='1'>See all genres</Radio>
                      <Radio value='2'>See release date</Radio>
                    </Stack>
                  </RadioGroup>
                  <Button type='submit'>Reveal Hint</Button>
                </FormControl>
              </form>
            )}
            <Text fontSize='lg'>{hint}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default Hint;

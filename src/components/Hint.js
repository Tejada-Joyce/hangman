import { useState } from 'react';
import {
  Button,
  Divider,
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
import { FaLightbulb } from 'react-icons/fa';
import { genres } from '../constants';

const Hint = ({ movieData }) => {
  const [optionHint, setOptionHint] = useState('1');
  const [hint, setHint] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const getHintHandler = (e) => {
    e.preventDefault();
    if (optionHint === '1') {
      const genresNames = movieData.genre_ids
        .map((id) => {
          const genreObj = genres.find((genre) => genre.id === id);
          return genreObj.name;
        })
        .join(', ');
      setHint(`This movie's genres are: ${genresNames}.`);
    } else {
      setHint(`This movie was released on ${movieData.release_date}.`);
    }
  };
  return (
    <div>
      <Button
        onClick={onOpen}
        bgColor='#2c2c2c'
        color='white'
        _hover={{
          color: 'black',
          bg: 'white'
        }}
        rightIcon={<FaLightbulb />}
      >
        <span style={{ marginTop: 4 }}>
          {hint ? 'See My Hint' : 'Give Me a Hint'}
        </span>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign='left'>
            {hint ? 'Here is your hint' : 'What hint do you want?'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!hint && (
              <>
                <Text
                  fontSize='sm'
                  textAlign='left'
                  position='relative'
                  top='-15px'
                >
                  You only get one hint.
                </Text>

                <form onSubmit={getHintHandler}>
                  <FormControl>
                    <RadioGroup onChange={setOptionHint} value={optionHint}>
                      <Stack direction='column' spacing={5}>
                        <Radio value='1' size='lg' colorScheme='yellow'>
                          See all genres
                        </Radio>
                        <Radio value='2' size='lg' colorScheme='yellow'>
                          See release date
                        </Radio>
                      </Stack>
                    </RadioGroup>
                    <Divider h={5} borderColor='transparent' />
                    <Button
                      type='submit'
                      mb='10px'
                      bgColor='#2c2c2c'
                      color='white'
                      _hover={{
                        color: 'black',
                        bg: 'white'
                      }}
                    >
                      Reveal Hint
                    </Button>
                  </FormControl>
                </form>
              </>
            )}
            <Text fontSize='lg' mb='20px'>
              {hint}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Hint;

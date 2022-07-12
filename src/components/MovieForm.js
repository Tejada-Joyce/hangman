import { useState } from 'react';
import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Select,
  useToast
} from '@chakra-ui/react';
import { genres } from '../constants';

const MovieForm = ({ setMovieData }) => {
  const [genre, setGenre] = useState();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=b11f13bb78577d3c7bc7dd29e72f09a1&with_genres=${genre}`
      );
      if (!response.ok) {
        throw new Error('Something went wrong.');
      }
      const data = await response.json();
      const movies = data?.results;
      const movie = movies[Math.floor(Math.random() * movies.length)];
      setMovieData(movie);
    } catch (error) {
      console.log(error);
      toast({
        title: 'Something went wrong.',
        status: 'error',
        isClosable: true
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor='genre'>Genre</FormLabel>
        <Select
          id='genre'
          placeholder='Select Genre'
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          w='300px'
        >
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </Select>
        <Divider h={5} borderColor='transparent' />
        <Button type='submit' colorScheme='yellow' disabled={!genre}>
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default MovieForm;

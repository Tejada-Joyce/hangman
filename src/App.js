import { useEffect, useState } from 'react';
import { Stack, VStack } from '@chakra-ui/react';
import Alphabet from './components/Alphabet';
import Hangman from './components/Hangman';
import Hint from './components/Hint';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import first from './img/1.png';
import second from './img/2.png';
import third from './img/3.png';
import fourth from './img/4.png';
import fifth from './img/5.png';
import sixth from './img/6.png';
import hanged from './img/7.png';
import winner from './img/win.png';
import title from './img/Hangman-logo.png';

const stages = [first, second, third, fourth, fifth, sixth, hanged];

function App() {
  const [guessedLetter, setGuessedLetter] = useState();
  const [strikes, setStrikes] = useState(0);
  const [movieData, setMovieData] = useState();
  const [won, setWon] = useState(false);
  const [gaveUp, setGaveUp] = useState(false);

  useEffect(() => {
    const movieData = JSON.parse(localStorage.getItem('movie'));
    if (movieData) {
      setMovieData(movieData);
    }
  }, []);
  const maxStrikes = strikes >= stages.length - 1;
  let src = maxStrikes ? stages[stages.length - 1] : stages[strikes];
  if (won) src = winner;
  const movieName = movieData?.title;
  return (
    <Stack
      direction={['column', null, null, movieData ? 'row' : 'column']}
      maxW={['95%', '85%', '80%', '95%']}
      minH='100vh'
      align='center'
      justify='center'
      gap='10px'
      m={['10px auto 25px', null, null, '0px auto']}
    >
      {!movieData ? (
        <>
          <img src={title} alt='hangman' style={{ maxWidth: '90%' }} />
          <MovieForm setMovieData={setMovieData} />
        </>
      ) : (
        <>
          <Hangman
            gaveUp={gaveUp}
            setGaveUp={setGaveUp}
            maxStrikes={maxStrikes}
            src={src}
            won={won}
          />
          <VStack gap='10px'>
            {!won && !maxStrikes && <Hint movieData={movieData} />}
            <Movie
              gaveUp={gaveUp}
              guessedLetter={guessedLetter}
              movieName={movieName}
              setStrikes={setStrikes}
              setWon={setWon}
            />
            <Alphabet
              setGuessedLetter={setGuessedLetter}
              maxStrikes={maxStrikes}
              won={won}
            />
          </VStack>
        </>
      )}
    </Stack>
  );
}

export default App;

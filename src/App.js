import { useState } from "react";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import Alphabet from "./components/Alphabet";
import Hangman from "./components/Hangman";
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";
import first from "./img/1.png";
import second from "./img/2.png";
import third from "./img/3.png";
import fourth from "./img/4.png";
import fifth from "./img/5.png";
import sixth from "./img/6.png";
import hanged from "./img/7.png";
import winner from "./img/win.png";

const stages = [first, second, third, fourth, fifth, sixth, hanged];

function App() {
  const [guessedLetter, setGuessedLetter] = useState();
  const [strikes, setStrikes] = useState(0);
  const [movieData, setMovieData] = useState();
  const [won, setWon] = useState(false);
  const maxStrikes = strikes >= stages.length - 1;
  let src = maxStrikes ? stages[stages.length - 1] : stages[strikes];
  if (won) src = winner;
  const movieName = movieData?.title;
  return (
    <ChakraProvider>
      <VStack>
        <Hangman maxStrikes={maxStrikes} src={src} won={won} />
        {!movieData ? (
          <MovieForm setMovieData={setMovieData} />
        ) : (
          <>
            <Movie
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
          </>
        )}
      </VStack>
    </ChakraProvider>
  );
}

export default App;

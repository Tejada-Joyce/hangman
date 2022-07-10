import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
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
const apiKey = "b11f13bb78577d3c7bc7dd29e72f09a1";
// https://api.themoviedb.org/3/discover/movie?api_key=b11f13bb78577d3c7bc7dd29e72f09a1&with_genres=28&language=zh

function App() {
  const [guessedLetter, setGuessedLetter] = useState();
  const [strikes, setStrikes] = useState(0);
  const [movieName, setMovieName] = useState();
  const [won, setWon] = useState(false);
  const maxStrikes = strikes >= stages.length - 1;
  let src = maxStrikes ? stages[stages.length - 1] : stages[strikes];
  if (won) src = winner;

  return (
    <ChakraProvider>
      <Hangman maxStrikes={maxStrikes} src={src} won={won} />
      {!movieName ? (
        <MovieForm />
      ) : (
        <>
          <Movie
            guessedLetter={guessedLetter}
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
    </ChakraProvider>
  );
}

export default App;

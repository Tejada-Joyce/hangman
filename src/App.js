import { useState } from "react";
import Alphabet from "./components/Alphabet";
import Hangman from "./components/Hangman";
import Movie from "./components/Movie";
function App() {
  const [guessedLetter, setGuessedLetter] = useState();
  const [strikes, setStrikes] = useState(0);

  return (
    <>
      <Hangman strikes={strikes} />
      <Movie guessedLetter={guessedLetter} setStrikes={setStrikes} />
      <Alphabet setGuessedLetter={setGuessedLetter} />
    </>
  );
}

export default App;

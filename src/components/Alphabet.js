import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "@chakra-ui/react";
import { alphabet } from "../constants";

const LetterButton = styled(Button)`
  margin: 10px;
  border: 1px solid grey;
`;

const Alphabet = ({ setGuessedLetter, maxStrikes, won }) => {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const clickHandler = useCallback(
    (letter) => {
      const lowerCaseLetter = letter.toLowerCase();
      setGuessedLetter(lowerCaseLetter);
      setGuessedLetters((prevSt) => [...prevSt, lowerCaseLetter]);
    },
    [setGuessedLetter]
  );
  const detectKeydown = (e) => {
    const letter = e.key.toLowerCase();
    if (e.keyCode > 64 && e.keyCode < 91 && !guessedLetters.includes(letter)) {
      clickHandler(letter);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", detectKeydown, true);
    return () => {
      document.removeEventListener("keydown", detectKeydown, true);
    };
  });
  return (
    <div>
      {alphabet.map((letter) => (
        <LetterButton
          key={letter}
          onClick={() => clickHandler(letter)}
          disabled={
            maxStrikes || guessedLetters.includes(letter.toLowerCase()) || won
          }
        >
          {letter}
        </LetterButton>
      ))}
    </div>
  );
};

export default Alphabet;

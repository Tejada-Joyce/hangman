import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const LetterButton = styled.button`
  margin: 10px;
  border: 1px solid grey;
`;

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const Alphabet = ({ setGuessedLetter, maxStrikes, won }) => {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const clickHandler = useCallback(
    (letter) => {
      setGuessedLetter(letter.toLowerCase());
      setGuessedLetters((prevSt) => [...prevSt, letter]);
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
    <>
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
    </>
  );
};

export default Alphabet;

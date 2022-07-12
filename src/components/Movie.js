import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

const Letter = styled.div`
  display: inline-block;
  border-bottom: 2px solid black;
  text-align: center;
  margin: 10px;
  width: 10px;
`;

const Movie = ({ guessedLetter, movieName, setStrikes, setWon }) => {
  const [correctGuesses, setCorrectGuesses] = useState([]);
  useEffect(() => {
    if (movieName.toLowerCase().includes(guessedLetter)) {
      setCorrectGuesses((prevSt) => [...prevSt, guessedLetter]);
    } else {
      if (guessedLetter !== undefined) {
        setStrikes((prevSt) => prevSt + 1);
      }
    }
  }, [guessedLetter, movieName, setStrikes]);

  useEffect(() => {
    const movieUniqueLetters = new Set(
      movieName
        .toLowerCase()
        .replaceAll(/[^a-zA-Z]/g, "")
        .split("")
    );
    if (movieUniqueLetters.size === correctGuesses.length) setWon(true);
  }, [correctGuesses, movieName, setWon]);

  return (
    <div>
      {[...movieName].map((letter, idx) => {
        if (/[a-zA-Z]/.test(letter)) {
          return (
            <Fragment key={`letter_${idx}`}>
              {correctGuesses.includes(letter.toLowerCase()) ? (
                <Letter>{letter}</Letter>
              ) : (
                <Letter>-</Letter>
              )}
            </Fragment>
          );
        } else {
          return (
            <span
              key={`_${idx}`}
              style={{ marginLeft: letter === " " ? 25 : 0 }}
            >
              {letter}
            </span>
          );
        }
      })}
    </div>
  );
};

export default Movie;

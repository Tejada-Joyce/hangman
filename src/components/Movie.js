import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

const Letter = styled.div`
  display: inline-block;
  border-bottom: 2px solid black;
  text-align: center;
  margin: 10px;
  width: 10px;
`;

const Movie = ({ guessedLetter, setStrikes, setWon }) => {
  const movieName = "Jurassic World";
  const [correctGuesses, setCorrectGuesses] = useState([]);
  useEffect(() => {
    if (movieName.toLowerCase().includes(guessedLetter)) {
      setCorrectGuesses((prevSt) => [...prevSt, guessedLetter]);
    } else {
      if (guessedLetter !== undefined) {
        setStrikes((prevSt) => prevSt + 1);
      }
    }
  }, [guessedLetter, setStrikes]);

  useEffect(() => {
    const movieUniqueLetters = new Set(movieName.replaceAll(" ", "").split(""));
    if (movieUniqueLetters.size === correctGuesses.length) setWon(true);
  }, [correctGuesses, setWon]);

  return (
    <div>
      {[...movieName].map((letter, idx) => {
        if (letter !== " ") {
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
          return <span key={`_${idx}`} style={{ marginLeft: 25 }}></span>;
        }
      })}
    </div>
  );
};

export default Movie;

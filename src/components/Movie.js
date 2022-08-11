import { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';

const Letter = styled.span`
  border-bottom: 2px solid black;
  text-align: center;
  margin: 10px;
  width: 10px;
`;

const WordsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 95%;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  line-height: 40px;
`;
const Movie = ({ gaveUp, guessedLetter, movieName, setStrikes, setWon }) => {
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
        .replaceAll(/[^a-zA-Z]/g, '')
        .split('')
    );
    if (movieUniqueLetters.size === correctGuesses.length) {
      localStorage.clear();
      setWon(true);
    }
  }, [correctGuesses, movieName, setWon]);

  const words = movieName.split(' ');

  return (
    <WordsContainer>
      {words.map((word, idx) => {
        return (
          <div key={`${word}_${idx}`} style={{ display: 'inline-block' }}>
            {[...word].map((letter, i) => {
              if (/[a-zA-Z]/.test(letter)) {
                return (
                  <Fragment key={`letter_${idx}_${i}`}>
                    {gaveUp || correctGuesses.includes(letter.toLowerCase()) ? (
                      <Letter>{letter}</Letter>
                    ) : (
                      <Letter>-</Letter>
                    )}
                  </Fragment>
                );
              } else {
                return (
                  <span key={`_${idx}_${i}`} style={{ marginLeft: 0 }}>
                    {letter}
                  </span>
                );
              }
            })}
          </div>
        );
      })}
    </WordsContainer>
  );
};

export default Movie;

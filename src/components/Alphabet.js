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

const Alphabet = ({ setGuessedLetter }) => {
  return (
    <>
      {alphabet.map((letter) => (
        <LetterButton
          key={letter}
          onClick={() => setGuessedLetter(letter.toLowerCase())}
        >
          {letter}
        </LetterButton>
      ))}
    </>
  );
};

export default Alphabet;
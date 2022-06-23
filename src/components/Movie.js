import styled from "styled-components";

const Letter = styled.span`
  border-bottom: 2px solid black;
  margin: 10px;
`;

const Movie = ({ movieName }) => {
  return (
    <div>
      {[...movieName].map((letter, idx) => {
        if (letter !== " ") {
          return <Letter key={`${letter}_${idx}`}>{letter}</Letter>;
        } else {
          return <span key={`_${idx}`}> </span>;
        }
      })}
    </div>
  );
};

export default Movie;

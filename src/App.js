import Alphabet from "./components/Alphabet";
import Movie from "./components/Movie";
function App() {
  const movieName = "Jurassic World";
  const checkLetter = (letter) => {
    if (movieName.includes(letter)) {
      console.log(letter, "It's here!");
    }
  };
  return (
    <>
      <Movie movieName={movieName} />
      <Alphabet checkLetter={checkLetter} />
    </>
  );
}

export default App;

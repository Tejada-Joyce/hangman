import { useState } from "react";
import { Button, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { genres } from "../constants";

const MovieForm = () => {
  const [genre, setGenre] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${genre}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="genre">Genre</FormLabel>
        <Select
          id="genre"
          placeholder="Select Genre"
          onChange={(e) => setGenre(e.target.value)}
        >
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </Select>
        <FormLabel htmlFor="language">Language</FormLabel>
        <Button type="submit">Submit</Button>
      </FormControl>
    </form>
  );
};

export default MovieForm;

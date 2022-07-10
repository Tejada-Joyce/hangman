import { memo } from "react";
import { Image } from "@chakra-ui/react";

import again from "../img/arrow.png";

const Hangman = ({ src, maxStrikes, won }) => {
  if (won) {
    return <Image src={src} alt="happy person" />;
  }
  const refreshHandler = () => {
    window.location.reload();
  };

  if (!maxStrikes) {
    return <Image src={src} alt="still alive" />;
  }

  return (
    <div>
      <Image src={src} alt="end game" />
      <p>Try again</p>
      <Image
        src={again}
        alt="Refresh arrow"
        boxSize="20px"
        onClick={refreshHandler}
      />
    </div>
  );
};

export default memo(Hangman);

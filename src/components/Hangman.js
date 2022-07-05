import { memo } from "react";

import again from "../img/arrow.png";

const Hangman = ({ src, maxStrikes, won }) => {
  if (won) {
    return <img src={src} alt="happy person" />;
  }
  const refreshHandler = () => {
    window.location.reload();
  };

  if (!maxStrikes) {
    return <img src={src} alt="still alive" />;
  }

  return (
    <div>
      <img src={src} alt="end game" />
      <p>Try again</p>
      <img
        src={again}
        alt="Refresh arrow"
        width={20}
        onClick={refreshHandler}
      />
    </div>
  );
};

export default memo(Hangman);

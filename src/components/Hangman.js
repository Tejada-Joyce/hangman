import { memo } from "react";

import first from "../img/1.png";
import second from "../img/2.png";
import third from "../img/3.png";
import fourth from "../img/4.png";
import fifth from "../img/5.png";
import sixth from "../img/6.png";
import hanged from "../img/7.png";
import again from "../img/arrow.png";

const stages = [first, second, third, fourth, fifth, sixth, hanged];

const Hangman = ({ strikes }) => {
  const src = stages[strikes];

  const refreshHandler = () => {
    window.location.reload();
  };

  if (strikes < stages.length - 1) {
    return <img src={src} alt={`game stage ${strikes}`} />;
  }

  return (
    <div>
      <img src={stages[stages.length - 1]} alt={`end game`} />
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

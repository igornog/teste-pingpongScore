import React from "react";
import "./PlayerScore.scss"

const PlayerScore = (props) => {
  return (
    <p>
      Player {props.player}: {props.points} {props.points > 0 ? "points" : "point" }
      <button onClick={props.onIncrementClick}>+</button>
      <button onClick={props.onDecrementClick}>-</button>
    </p>
  );
};
export default PlayerScore;

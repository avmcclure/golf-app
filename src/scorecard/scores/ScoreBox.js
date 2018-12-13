import React from 'react';

function ScoreBox(props) {
  return (
    <div className="score-box">
      <div className="hole">{props.hole}</div>
      {props.children}
    </div>
  );
}

export default ScoreBox;

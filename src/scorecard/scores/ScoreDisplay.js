import React from 'react';
import ScoreBox from './ScoreBox';

export default function ScoreDisplay(props) {
  return (
    <ScoreBox hole={props.index + 1}>
      <span className="score">{props.score}</span>
    </ScoreBox>
  );
}

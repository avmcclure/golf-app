import React from 'react';
import propTypes from 'prop-types';

ScoreBox.propTypes = {
  hole: propTypes.number,
  children: propTypes.children
}

function ScoreBox(props) {
  return (
    <div className="score-box">
      <div className="hole">{props.hole}</div>
      {props.children}
    </div>
  );
}

export default ScoreBox;

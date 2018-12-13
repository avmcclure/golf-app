import React from 'react';
import propTypes from 'prop-types';

import Box from '../box';

ScoreDisplay.propTypes = {
  index: propTypes.number,
  score: propTypes.number,
  hole: propTypes.string
};

export default function ScoreDisplay(props) {
  return <Box className="score" label={props.hole || props.index + 1}>{props.score}</Box>;
}

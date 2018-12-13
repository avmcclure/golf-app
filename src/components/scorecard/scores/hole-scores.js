import React, { Fragment } from 'react';
import { sum } from 'lodash';
import {scorecardType} from 'Types';
import Score from './score-display';

HoleScores.propTypes = {
  scorecard: scorecardType
}

function HoleScores({ scorecard }) {
  return (
    <Fragment>
      {scorecard.map((score, index) => (
        <Score score={score} index={index} key={index + 1} />
      ))}
      <Score score={sum(scorecard)} hole={'Total'} />
    </Fragment>
  );
}

export default HoleScores;

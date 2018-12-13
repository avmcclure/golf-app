import React from 'react';
import Scores from './scores/hole-scores';
import Course from './course';
import Player from './player';
import { scorecardType, playerType, courseType } from 'Types';

import 'Styles/scorecard.scss';

Scorecard.propTypes = {
  scorecard: scorecardType,
  player: playerType,
  course: courseType
};

function Scorecard({ scorecard, player, course }) {
  return (
    <div className="scorecard">
      <Player {...player}/>
      <Course {...course}/>
      <Scores scorecard={scorecard}/>
    </div> 
  );
}

export default Scorecard;

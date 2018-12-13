import React, { Component } from 'react';
import Scores from './scores/Scores';
import scoreStore from '../stores/ScoreStore';

class Scorecard extends Component {
  state = { editable: false };

  render() {
    return (
      <div className="scorecard">
        <Scores scoreStore={scoreStore} />
      </div>
    );
  }
}

export default Scorecard;

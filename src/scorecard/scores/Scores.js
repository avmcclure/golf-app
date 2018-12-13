import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import Score from './ScoreDisplay';

@observer
class Scores extends Component {
  render() {
    const { scoreStore } = this.props;

    console.log(scoreStore);

    return (
      <Fragment>
        {scoreStore.scores.map((score, index) => (
          <Score score={score} index={index} />
        ))}
        <Score score={scoreStore.totalScore} hole={'Total'} />
      </Fragment>
    );
  }
}

export default Scores;

import React, { Component } from 'react';
import ScoreBox from './ScoreBox';

export default class ScoreInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.score
    };
  }

  handleOnChange = ({ value }) => {};

  render() {
    const score = this.props.score;

    return (
      <ScoreBox {...this.props}>
        <span className="score">
          <input value={score} onChange={this.handleOnChange} />
        </span>
      </ScoreBox>
    );
  }
}

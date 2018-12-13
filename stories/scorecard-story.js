import React from 'react';
import { storiesOf } from '@storybook/react';
import Scorecard from 'Components/scorecard/scorecard';
import {chance} from 'Test/chance-mixins';

const player = chance.player();
const emptyScorecard = chance.scorecard(true);
const scorecard = chance.scorecard();
const course = chance.course();

storiesOf('Scorecard', module)
  .add('without scores', () => <Scorecard scorecard={emptyScorecard} player={player} course={course} />)
  .add('with scores', () => {
    return <Scorecard scorecard={scorecard} player={player} course={course}/>;
  });

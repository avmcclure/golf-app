import React, { Fragment } from 'react';
import { playerType } from 'Types';
import Box from './box';

Course.propTypes = playerType;

function Course({ firstName, lastName, id }) {
  return (
    <Fragment>
      <Box className="player-id" label={'Player ID'}>
        {id}
      </Box>
      <Box className="player-name" label={'Name'}>
        {`${firstName} ${lastName}`}
      </Box>
    </Fragment>
  );
}

export default Course;

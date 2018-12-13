import React from 'react';
import { courseType } from 'Types';
import Box from './box';

Course.propTypes = courseType;

function Course(props) {
  const { name } = props;
  return (
    <Box className="course" label={'Course'}>
      {name}
    </Box>
  );
}

export default Course;

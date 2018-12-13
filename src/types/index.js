import { shape, string, arrayOf, oneOf } from 'prop-types';

const MIN_GRADE_LEVEL = 4;
const MAX_GRADE_LEVEL = 8;

export const scorecardType = function(props, propName, componentName) {
  if (!Array.isArray(props[propName]) || props[propName].length !== 9 || !props[propName].every(Number.isInteger)) {
    return new Error('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed.');
  }
};

export const gradeType = function(props, propName, componentName) {
  if (!Number.isInteger(props[propName]) || props[propName] || !props[propName].every(Number.isInteger)) {
    return new Error(`Invalid prop '${propName}' supplied to ${componentName}. Must be a number between ${MIN_GRADE_LEVEL} and ${MAX_GRADE_LEVEL}`);
  }
};

export const courseType = shape({
  id: string.isRequired,
  name: string.isRequired
});

export const genderType = oneOf(['MALE', 'FEMALE']);

export const playerType = shape({
  id: string.isRequired,
  firstName: string.isRequired,
  lastName: string.isRequired,
  teamId: string.isRequired
});

export const teamType = shape({
  id: string.isRequired,
  name: string.isRequired,
  school: string.isRequired,
  grade: gradeType.isRequired,
  gender: genderType.isRequired,
  players: arrayOf(playerType)
});

import Chance from 'chance';
import { genders, schools, courses } from 'Constants';
import { get } from 'lodash';
import { generateIds } from 'Utils/id-generator';

const chance = new Chance();

function pickOneObject(obj) {
  return chance.pickone(Object.values(obj));
}

function gradeFn() {
  return chance.natural({ min: 1, max: 8 });
}

function playerFn(overrides = {}) {
  const school = get(overrides, 'school', pickOneObject(schools));
  const season = get(overrides, 'season', chance.natural({ min: 10, max: 99 }));
  const gender = get(overrides, 'gender', pickOneObject(genders));
  const grade = get(overrides, 'grade', gradeFn());
  const number = get(overrides, 'number', chance.natural({ min: 1, max: 12 }));
  const { playerId, teamId } = generateIds({ season, gender, grade, school, number });
  return {
    firstName: chance.first(),
    lastName: chance.last(),
    id: playerId,
    teamId,
    ...overrides
  };
}

chance.mixin({
  grade: gradeFn,
  genderEnum: () => pickOneObject(genders),
  school: () => pickOneObject(schools),
  course: () => pickOneObject(courses),
  player: playerFn,
  scorecard: (isEmpty = false) => {
    if (isEmpty) {
      return Array(9).fill(undefined);
    }
    return chance.n(() => chance.natural({ min: 1, max: 10 }), 9);
  }
});

export { chance };

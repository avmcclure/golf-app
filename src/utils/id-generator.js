import {set} from 'lodash';

export function generateIds({season, gender, grade, school, number}) {
  const teamId = `S${season}${gender.abbr}${grade}${school.abbr}`;
  const ids = {teamId};

  if(number) {
    const playerId = `${teamId}${number}`;
    set(ids, 'playerId', playerId);
  }

  return ids;
}
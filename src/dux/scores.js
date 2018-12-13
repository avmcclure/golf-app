import { ScopedType } from './util';

const Type = ScopedType('scores');
const SCORE_UPDATED = Type('SCORE_UPDATED');

export const actions = {
  updateScore(date, courseId, score) {
    return dispatch => {
      dispatch({ type: SCORE_UPDATED, payload: { date, courseId, score } });
    };
  }
};

function createOrUpdateScore(state, date, courseId, score) {
  const scoreId = createScoreId(courseId, date);
  return { ...state, [scoreId]: score };
}

function createScoreId(courseId, date) {
  return `${courseId}_${date}`;
}

const reducers = {
  [SCORE_UPDATED]: (state, { payload }) => {
    const { date, courseId, score } = payload;
    return {
      ...state,
      scores: createOrUpdateScore(state, date, courseId, score)
    };
  }
};

export function reducer(state = {}, action) {
  const typeReducer = reducers[action.type];
  if (!typeReducer) return state;
  return typeReducer(state, action);
}

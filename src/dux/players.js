import {pick} from 'lodash';
import { ScopedType } from './util';

const Type = ScopedType('player');
const PLAYERS_LOADED = Type('PLAYERS_LOADED');
const PLAYERS_LOAD_FAILED = Type('PLAYERS_LOAD_FAILED');

export const actions = {
  fetchPlayers() {
    return async dispatch => {
      try {
        const players = await getPlayers();
        dispatch({ type: PLAYERS_LOADED, payload: players });
      } catch (e) {
        dispatch({ type: PLAYERS_LOAD_FAILED, payload: JSON.stringify(e) });
      }
    };
  }
};

export function reducer(state = {}, action) {
  switch(action.type) {
    case PLAYERS_LOADED:
      return {...state, ...pick(action.payload, Object.keys(state))};
    default:
      return state;
  }
}

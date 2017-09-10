import * as constants from '../actions/constants';
import initialState from './initialState';

/**
 * Reducers for one event
 * @param {object} state
 * @param {object} action
 * @returns {array} new state of the event
 */
export function event(state = initialState.event, action) {
  switch(action.type) {
    case constants.GET_EVENT:
      return action.details;
    default:
      return state;
  }
}



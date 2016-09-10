import { get } from 'qwest';
import * as types from './actionTypes';

const method = method => `http://localhost:8080/${method}`;

export const fetchCards = options => (dispatch, getState) => {
  dispatch({
    type: types.FETCH_CARDS_REQUEST,
  });

  return get(method('cards'), options, { responseType: 'json' })
    .then((xhr, response) => dispatch({
      type: types.FETCH_CARDS_SUCCESS,
      payload: response,
    }));
};
import * as types from '../actions/actionTypes';

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch(action.type) {
    case types.FETCH_CARDS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}

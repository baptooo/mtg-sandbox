import * as types from '../actions/actionTypes';

const initialState = {
  items: [],
  isLoading: false,
};

const data = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_CARDS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_CARDS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default data;

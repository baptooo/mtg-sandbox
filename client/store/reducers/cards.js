import * as types from '../actions/actionTypes';

const initialState = {
  magnifiedCard: null,
  isMagnified: false,
};

const cards = (state = initialState, { type, payload }) => {
  switch(type) {
    case types.MAGNIFY_CARD:
      return {
        ...state,
        magnifiedCard: payload,
        isMagnified: true,
      };
    case types.MINIFY_CARD:
      return {
        magnifiedCard: null,
        isMagnified: false,
      };
    default:
      return state;
  }
};

export default cards;

import * as types from './actionTypes';

export const magnifyCard = (card, multiverseid) => {
  return {
    type: types.MAGNIFY_CARD,
    payload: {
      ...card,
      multiverseid,
    },
  };
};

export const minifyCard = () => ({
  type: types.MINIFY_CARD,
});

import * as types from '../actions/actionTypes';
import searchfields from '../../config/searchfields';

const initialState = {
  fields: searchfields,
};

export default function (state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistentStore } from 'redux-pouchdb';
import PouchDb from 'pouchdb';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const middlewares = applyMiddleware(
  thunk,
);
const db = new PouchDb('mtg-sandbox');

const createStoreWithMiddleware = compose(
  middlewares,
  persistentStore(db)
)(createStore);

export default createStoreWithMiddleware(reducer);

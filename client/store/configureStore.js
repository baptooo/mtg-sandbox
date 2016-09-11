import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistentStore, persistentReducer } from 'redux-pouchdb';
import PouchDb from 'pouchdb';
import * as reducers from './reducers';

const reducer = persistentReducer(
  combineReducers(reducers)
);
const middlewares = applyMiddleware(
  thunk,
);
const db = new PouchDb('mtg-sandbox');

// throw(db.destroy());

const createStoreWithMiddleware = compose(
  middlewares,
  persistentStore(db)
)(createStore);

export default createStoreWithMiddleware(reducer);

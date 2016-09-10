import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';
import App from '../components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

let store = createStore(combineReducers(reducers));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('mtg-app')
);

export default store;
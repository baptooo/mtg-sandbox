import { get } from 'qwest';
import store from './store/createStore';

console.log(store);

const method = method => `http://localhost:8080/${method}`;

const fetch = (options = null) => {
  get(method('cards'), options, { responseType: 'json' })
    .then((xhr, response) => refresh(response));
};

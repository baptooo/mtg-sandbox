import React from 'react';
import { render } from 'react-dom';
import { get } from 'qwest';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import SearchForm from './components/presentational/searchform/SearchForm';
import Cards from './components/presentational/cards/Cards';

const method = method => `http://localhost:8080/${method}`;

const refresh = (data = null) => {
  render(
    <MuiThemeProvider>
      <div>
        <SearchForm onSubmitHandler={fetch} />
        {data && <Cards cards={data} />}
      </div>
    </MuiThemeProvider>,
    document.getElementById('mtg-app')
  )
};

const fetch = (options = null) => {
  get(method('cards'), options, { responseType: 'json' })
    .then((xhr, response) => refresh(response));
};

injectTapEventPlugin();
refresh();
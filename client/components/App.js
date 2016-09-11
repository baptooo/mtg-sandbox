import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { get } from 'qwest';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import SearchFormContainer from './container/searchform/SearchFormContainer';
import CardsContainer from './container/cards/CardsContainer';
import MagnifiedCardContainer from './container/magnifiedcard/MagnifiedCardContainer';

const App = () => (
  <MuiThemeProvider>
    <div>
      <SearchFormContainer />
      <CardsContainer/>
      <MagnifiedCardContainer />
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  // propTypes
};

App.defaultProps = {
  // defaultProps
};

export default App;
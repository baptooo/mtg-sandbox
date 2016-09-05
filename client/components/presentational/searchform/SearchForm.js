import React, { PropTypes } from 'react';
import style from './SearchForm.css';
import SearchField from './SearchField';
import options from '../../../config/searchfields';
import RaisedButton from 'material-ui/RaisedButton';

const SearchForm = ({
  onSubmitHandler,
}) => {
  const onSubmit = (evt) => {
    evt.preventDefault();
    const {target : form} = evt;
    let options = {};

    [].slice.call(form.elements, 0).forEach(({name, value}) => (name && value) && Object.assign(options, {
      [name]: value,
    }));

    if (options !== {}) {
      onSubmitHandler(options);
    }
  };

  return (
    <form onSubmit={onSubmit} className={style.SearchForm}>
      {options.map((option, key) => (
        <SearchField {...option} key={key} />
      ))}

      <RaisedButton label="Search" primary={true} type="submit" />
    </form>
  );
};

SearchForm.propTypes = {
  // propTypes
};

SearchForm.defaultProps = {
  // defaultProps
};

export default SearchForm;
import React, { PropTypes } from 'react';
import style from './SearchForm.css';
import SearchField from './SearchField';
import RaisedButton from 'material-ui/RaisedButton';

const SearchForm = ({
  fetchCards,
  fields,
}) => {
  const onSubmit = (evt) => {
    evt.preventDefault();
    const {target : form} = evt;
    let options = {};

    [].slice.call(form.elements, 0).forEach(({name, value}) => (name && value) && Object.assign(options, {
      [name]: value,
    }));

    if (options !== {}) {
      fetchCards(options);
    }
  };

  return (
    <form onSubmit={onSubmit} className={style.SearchForm}>
      {fields.map((option, key) => (
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
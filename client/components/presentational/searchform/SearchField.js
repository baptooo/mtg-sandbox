import React, { PropTypes, Component } from 'react';
import TextField from 'material-ui/TextField';
import Select from './select/Select';
import style from './SearchForm.css';

const SearchField = ({
  type,
  name,
  displayName,
  defaultValue,
  values,
  isRadio,
}) => (
  <div className={style.field}>
    {type !== 'choice' ? (
      <TextField
        type={type}
        name={name}
        id={name}
        floatingLabelText={displayName || name}
        defaultValue={defaultValue || ''}
      />
    ) : (
      <Select name={name} values={values} />
    )}
  </div>
);

SearchField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string,
  values: PropTypes.array,
  isRadio: PropTypes.bool,
};

SearchField.defaultProps = {
  type: 'text',
};

export default SearchField;
import React, { PropTypes, Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import style from './SearchForm.css';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = { value: null };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    const { name, values } = this.props;

    const Items = values.map(({value, name}, key) => (
      <MenuItem key={key} value={value} primaryText={name || value} />
    ));

    return (
      <div>
        <SelectField
          floatingLabelText={name}
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        >
          {Items}
        </SelectField>
        <FontIcon className="muidocs-icon-action-home" />
        {this.state.value && <input type="hidden" value={this.state.value} name={name} />}
      </div>
    );
  }
}

const SearchField = ({
  type,
  name,
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
        floatingLabelText={name}
        defaultValue={defaultValue || ''}
      />
    ) : (
      <Select name={name} values={values} />
    )}
  </div>
);

SearchField.propTypes = {
  // propTypes
};

SearchField.defaultProps = {
  // defaultProps
};

export default SearchField;
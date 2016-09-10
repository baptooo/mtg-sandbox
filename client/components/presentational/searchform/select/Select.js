import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItem from 'material-ui/MenuItem';

export default class Select extends Component {
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
        <IconButton onClick={() => this.setState({ value: null })}>
          <NavigationClose />
        </IconButton>
        {this.state.value && <input type="hidden" value={this.state.value} name={name} />}
      </div>
    );
  }
}

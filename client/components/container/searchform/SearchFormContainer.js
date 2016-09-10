import { connect } from 'react-redux';
import SearchForm from '../../presentational/searchform/SearchForm';

function mapStateToProps({ search : { fields }}) {
  return {
    fields,
  };
}

export default connect(
  mapStateToProps,
)(SearchForm);

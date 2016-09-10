import { connect } from 'react-redux';
import SearchForm from '../../presentational/searchform/SearchForm';
import { fetchCards } from '../../../store/actions/DataActions';

function mapStateToProps({ search : { fields }}) {
  return {
    fields,
    fetchCards,
  };
}

export default connect(
  mapStateToProps,
  { fetchCards },
)(SearchForm);

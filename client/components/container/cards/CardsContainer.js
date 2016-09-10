import {connect} from 'react-redux';
import Cards from '../../presentational/cards/Cards';

function mapStateToProps({ data: { items, isLoading } }) {
  return {
    items,
    isLoading,
  };
}

export default connect(
  mapStateToProps,
)(Cards);

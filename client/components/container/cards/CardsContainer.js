import {connect} from 'react-redux';
import Cards from '../../presentational/cards/Cards';

function mapStateToProps({ cards: { items } }) {
  return {
    items,
  };
}

export default connect(
  mapStateToProps,
)(Cards);

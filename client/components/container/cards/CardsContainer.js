import {connect} from 'react-redux';
import Cards from '../../presentational/cards/Cards';
import { magnifyCard } from '../../../store/actions/CardsActions';

function mapStateToProps({ data: { items, isLoading } }) {
  return {
    items,
    isLoading,
    magnifyCard,
  };
}

export default connect(
  mapStateToProps,
  { magnifyCard }
)(Cards);

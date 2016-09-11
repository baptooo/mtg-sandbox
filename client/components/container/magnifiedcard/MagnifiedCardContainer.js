import { connect } from 'react-redux';
import MagnifiedCard from '../../presentational/magnifiedcard/MagnifiedCard';
import { minifyCard } from '../../../store/actions/CardsActions';

function mapStateToProps({ cards: { magnifiedCard, isMagnified } }) {
  return {
    magnifiedCard,
    isMagnified,
    minifyCard,
  };
}

export default connect(
  mapStateToProps,
  { minifyCard },
)(MagnifiedCard);

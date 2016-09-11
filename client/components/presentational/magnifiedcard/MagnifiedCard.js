import React, {PropTypes} from 'react';
import styles from './MagnifiedCard.css';
import Card from '../cards/Card';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const MagnifiedCard = ({
  magnifiedCard,
  isMagnified,
  minifyCard,
}) => {
  if(!isMagnified) {
    return null;
  }

  const {
    name,
    manaCost,
    cmc,
    type,
    rarity,
    set,
    multiverseid,
  } = magnifiedCard;

  return (
    <section className={styles.MagnifiedCard}>
      <article className={styles.wrapper}>
        <h1>{name} — {manaCost}</h1>
        <h2>{type}</h2>
        <p>{set} - {rarity}</p>
        <Card id={multiverseid} />

        <div className={styles.close}>
          <IconButton onClick={() => minifyCard()}>
            <NavigationClose/>
          </IconButton>
        </div>
      </article>
    </section>
  );
};

MagnifiedCard.propTypes = {
  // propTypes
};

MagnifiedCard.defaultProps = {
  // defaultProps
};

export default MagnifiedCard;
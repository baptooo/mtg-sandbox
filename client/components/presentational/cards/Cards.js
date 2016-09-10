import React, { PropTypes, Component } from 'react';
import Card from './Card';
import styles from './Cards.css';
import CircularProgress from 'material-ui/CircularProgress';

const Cards = ({
  items,
  isLoading,
}) => {

  const getMultiverseId = card => {
    let { multiverseid } = card;

    if (card.foreignNames) {
      const french = card.foreignNames.find(item => item.language === 'French');

      if (french && french.multiverseid) {
        multiverseid = french.multiverseid;
      }
    }

    return multiverseid;
  };

  return (
    <div>
      {isLoading ? (
        <div className={styles.progress}>
          <CircularProgress size={1} />
        </div>
      ) : (
        <ul className={styles.Cards}>
          {items.map((card, key) => (
            <li key={key} className={styles.item}>
              <Card id={getMultiverseId(card)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Cards.propTypes = {
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

Cards.defaultProps = {
  // defaultProps
};

export default Cards;

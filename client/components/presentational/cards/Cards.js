import React, { PropTypes, Component } from 'react';
import Card from './Card';
import style from './Cards.css';

const Cards = ({
  items,
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
    <ul className={style.Cards}>
      {items.map((card, key) => (
        <li key={key} className={style.item}>
          <Card id={getMultiverseId(card)} />
        </li>
      ))}
    </ul>
  );
};

Cards.propTypes = {
  items: PropTypes.array.isRequired,
};

Cards.defaultProps = {
  // defaultProps
};

export default Cards;

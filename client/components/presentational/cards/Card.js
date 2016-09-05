import React, { PropTypes } from 'react';
import ImageLoader from 'react-imageloader';
import style from './Cards.css';
import placeholder from '../../../assets/placeholder.jpg';

const getImageUrl = id => (
  id ? `http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${id}&type=card`
    : placeholder
);

const PreLoader = () => (
  <img className={style.placeholder} src={getImageUrl()} alt=""/>
);

const Card = ({
  id,
}) => {
  return (
    <div className={style.card}>
      <ImageLoader
        src={getImageUrl(id)}
        wrapper={React.DOM.div}
        preloader={PreLoader}
      >Image Failed</ImageLoader>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number
};

Card.defaultProps = {
  // defaultProps
};

export default Card;

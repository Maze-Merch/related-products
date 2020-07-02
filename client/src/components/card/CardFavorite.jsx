import React from 'react';

const CardFavorite = (props) => {
  // console.log('CardFavorite props= ', props);
  return (
    <div className="rp-favorite">
      <i
        data-id={props.id}
        className="icon star"
        onClick={props.openModal}
        role="button"
        />
    </div>
  );
};

export default CardFavorite;

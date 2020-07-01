import React from 'react';

const CardFavorite = (props) => {
  // console.log('CardFavorite props= ', props);
  return (
    <div className="rp-favorite">
      <i
        data-id={props.id}
        className="icon star"
        onClick={props.openModal}
        data-toggle="tooltip"
        data-placement="top"
        title="Compare This Product"
        role="button"
        />
    </div>
  );
};

export default CardFavorite;

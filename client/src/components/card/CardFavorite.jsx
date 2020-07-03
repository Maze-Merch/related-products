import React from 'react';

const CardFavorite = (id, openModal, cardType, close) => {
  console.log('CardFavorite props= ', close);
  return (
    <div className="rp-favorite">
      {cardType !== 'outfit'
        ? (
            <i
            data-id={id}
            className="icon rp-star"
            onClick={openModal}
            role="button"
            />
          )
        : (
            <i
            data-id={id}
            className="icon rp-close"
            onClick={close}
            role="button"
            />
          )}
    </div>
  );
};

export default CardFavorite;

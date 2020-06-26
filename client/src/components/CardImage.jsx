import React from 'react';

const CardImage = ({id, name, thumb}) => {
  // console.log('thumb =', thumb);
  return (
    <img src={thumb} className="img-fluid rp-card-image d-block" id={id} alt={name} />
  );
};

export default CardImage;

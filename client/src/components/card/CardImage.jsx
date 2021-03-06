import React from 'react';

const CardImage = ({id, name, thumb}) => {
  // console.log('thumb =', thumb);
  return (
    <img src={thumb} className="rp-card-image" id={id} alt={name} />
  );
};

export default CardImage;

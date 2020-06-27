import React from 'react';

const CardImage = ({id, name, thumb}) => {
  // console.log('thumb =', thumb);
  return (
    <img src={thumb} className="rp-card-image img-fluid img-thumbnail" id={id} alt={name} />
  );
};

export default CardImage;

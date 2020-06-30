import React from 'react';

const CardBody = ({name, slogan, desc, cat, price, stName, salePr}) => {
  // console.log('stName', price);
  let ucCat = cat.toUpperCase();
  return (

    <div>
      <div className="rp-card-category">{ucCat}</div>
      <h5>{name}: <br /> {stName}</h5>
      <p className="rp-card-text">{slogan}</p>
      <div className="rp-card-price">$ {price}</div>
      <div className="rp-card-stars">*****</div>
    </div>
  );
};

export default CardBody;

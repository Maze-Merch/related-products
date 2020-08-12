import React from 'react';
import Rating from '@material-ui/lab/Rating';

const CardBody = ({name, slogan, desc, cat, price, stName, salePr}) => {
  // console.log('stName', price);
  let ucCat = cat.toUpperCase();

  const starNum = () => (Math.floor(Math.random() * 5) + 1);

  return (

    <div>
      <div className="rp-card-category">{ucCat}</div>
      <h5>{name}: <br /> {stName}</h5>
      <p className="rp-card-text">{slogan}</p>
      <div className="rp-card-price">$ {price}</div>
      <div className="rp-card-stars">
        <Rating name="read-only" defaultValue={starNum()} size="small" />
      </div>
    </div>
  );
};

export default CardBody;

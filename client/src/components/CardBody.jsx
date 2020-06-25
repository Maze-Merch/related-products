import React from 'react';

const CardBody = ({name, slogan, desc, cat, price, styles}) => (
  <div>
    <div className="rp-card-category">CATEGORY</div>
    <h5>Product Name 1 of 5</h5>
    <p className="rp-card-text">Some quick example text to build on the card title.</p>
    <div className="rp-card-price">$125</div>
    <div className="rp-card-stars">*****</div>
  </div>
);

export default CardBody;

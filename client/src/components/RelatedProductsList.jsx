/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import CardFavorite from './CardFavorite';
import CardImage from './CardImage';
import CardBody from './CardBody';
import styles from './exampleData/prodStyles.json';

const RelatedProductsList = ({name, slogan, desc, cat, price}) => {
  // console.log('RP list = ', styles);
  const results = [];
  for (let i = 0; i < styles.length; i += 1) {
    results.push(styles[i].results);
  }
  console.log('Results= ', results);
  return (
    <div>
      {
        results.map((sty, i) =>
        <div className="col rp-card">
          <CardFavorite />
          <div className="rp-card-image-box">
            <CardImage id={sty.style_id} name={name} styName={sty.name} thumb={sty.photos} />
          </div>
          <div className="rp-card-body">
            <CardBody name={name} slogan={slogan} desc={desc} cat={cat} price={price} stName={sty.name} salePr={sty.sale_price > 0 ? sty.sale_price : null} />
          </div>
        </div>
        )}
    </div>
  );
};

export default RelatedProductsList;

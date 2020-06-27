/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import CardFavorite from './CardFavorite';
import CardImage from './CardImage';
import CardBody from './CardBody';
import styles from './exampleData/prodStyles.json';

const RelatedProductsList = ({id, name, slogan, desc, cat, price, count}) => {
  // console.log('id = ', id);
  // console.log('count = ', count);
  // console.log('Res length', styles[count].results.length);
  const styleRes = [];
  for (let i = 0; i < styles[count].results.length; i += 1) {
    styleRes.push(styles[count].results[i]);
  }
  // console.log('RP list = ', styles);
  // console.log('Results= ', styleRes);
  return (
    <>
      {
        styleRes.map((sty, i) => (
          <li className="list-group-item rp-card">
            <CardFavorite />
            <div className="rp-card-image-box">
              <CardImage
                id={sty.style_id}
                name={name}
                styName={sty.name}
                thumb={sty.photos[0].thumbnail_url}
                key={i}
              />
            </div>
            <div className="rp-card-body">
              <CardBody
                name={name}
                slogan={slogan}
                desc={desc}
                cat={cat}
                price={sty.original_price}
                stName={sty.name}
                salePr={sty.sale_price > 0 ? sty.sale_price : null}
                key={i}
              />
            </div>
          </li>
        ))
      }
    </>

  );
};

export default RelatedProductsList;

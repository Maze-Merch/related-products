import React from 'react';
import CardFavorite from './CardFavorite';
import CardImage from './CardImage';
import CardBody from './CardBody';
import styles from './exampleData/prodStyles.json';

const CarouselList = ({id, name, slogan, desc, cat, price, count}) => {

  const styleRes = [];
  for (let i = 0; i < styles[count].results.length; i += 1) {
    styleRes.push(styles[count].results[i]);
  }

  return (
    <>
      {
        styleRes.map((sty, i) => (
          <div className="carousel-item col-md-4">
            <CardImage
              id={sty.style_id}
              name={name}
              styName={sty.name}
              thumb={sty.photos[0].thumbnail_url}
              key={i}
            />
          </div>
        ))
      }
    </>
  );
};

export default CarouselList;

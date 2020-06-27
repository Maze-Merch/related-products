import React from 'react';
import CardFavorite from './CardFavorite';
import CardImage from './CardImage';
import CardBody from './CardBody';
// import styles from './exampleData/prodStyles.json';

const Card = ({id, product}) => {
  // console.log('Product =', product)
  return (
    <div className="rp-card">
      <CardFavorite id={id}/>
      <div className="rp-card-image-box">
        <CardImage
          id={id}
          name={product.name}
          styName={product.styleName}
          thumb={product.thumb}
          key={id}
        />
      </div>
      <div className="rp-card-body">
        <CardBody
          name={product.name}
          slogan={product.slogan}
          desc={product.description}
          cat={product.category}
          price={product.origPrice}
          stName={product.styleName}
          salePr={product.salePrice}
          key={id}
        />
      </div>
    </div>
  );
};

export default Card;

import React from 'react';
import CardFavorite from './CardFavorite';
import CardImage from './CardImage';
import CardBody from './CardBody';
// import styles from './exampleData/prodStyles.json';

const Card = ({product, openModal, cardType, close}) => {
  console.log('Card Product close =', close);
  return (
    <div className="rp-card">
      <CardFavorite id={product.idx} openModal={openModal} cardType={cardType} close={close} />
      <div className="rp-card-image-box">
        <CardImage
          id={product.id}
          name={product.name}
          styName={product.styleName}
          thumb={product.thumb}
          key={product.idx}
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
          key={product.idx}
        />
      </div>
    </div>
  );
};

export default Card;

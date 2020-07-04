import React from 'react';
// import CardFavorite from './CardFavorite';
import CardImage from './CardImage';
import CardBody from './CardBody';
// import styles from './exampleData/prodStyles.json';

const Card = ({product, openModal, cardType, close}) => {
  // console.log('Card Product =', product);
  return (
    <div className="rp-card">
      <div className="rp-favorite">
        {cardType !== 'outfit'
          ? (
              <i
              data-id={product.id}
              className="icon rp-star"
              onClick={openModal}
              role="button"
              />
            )
          : (
              <i
              data-id={product.id}
              className="icon rp-close"
              onClick={close}
              role="button"
              />
            )}
      </div>
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
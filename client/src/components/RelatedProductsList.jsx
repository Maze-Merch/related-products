import React from 'react';
import CardFavorite from './CardFavorite';
import CardImage from './CardImage';
import CardBody from './CardBody';

const RelatedProductsList = ({details, styles}) => {
  // console.log('RP list = ', props);
  return (//map on details here
    <div className="col rp-card">
      <CardFavorite />
      <div className="rp-card-image-box">
        <CardImage id={details.id} name={details.name} styles={styles}/>
      </div>
      <div className="rp-card-body">
        <CardBody name={details.name} slogan={details.slogan} desc={details.description} cat={details.category} price={details.default_price} styles={styles}/>
      </div>
    </div>
  );
};

export default RelatedProductsList;

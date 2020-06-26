import React from 'react';
// import regeneratorRuntime from "regenerator-runtime";
import RelatedProductsList from './RelatedProductsList';

const RelatedProducts = ({details}) => {
  // console.log('RP details', details);
  // console.log('RP styles', styles);
  return (
    <div className="rp-container">
      <div className="row rp-row">
        {details.map((det) => (
          <RelatedProductsList name={det.name} slogan={det.slogan} desc={det.description} cat={det.category} price={det.price} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

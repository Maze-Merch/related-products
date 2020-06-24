import React from 'react';
// import regeneratorRuntime from "regenerator-runtime";
import RelatedProductsList from './RelatedProductsList';

const RelatedProducts = ({details, styles}) => {
  console.log('RP details', details);
  console.log('RP styles', styles);
  return (
    <div className="rp-container">
      <div className="row rp-row">
        <RelatedProductsList details={details} styles={styles} />
      </div>
    </div>
  );
};

export default RelatedProducts;

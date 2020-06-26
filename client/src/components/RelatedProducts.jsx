import React from 'react';
// import regeneratorRuntime from "regenerator-runtime";
import RelatedProductsList from './RelatedProductsList';

let counter = -1;
function incrementCount() {
  counter += 1;
  return counter;
}

const RelatedProducts = ({details}) => {
  // console.log('RP details', details);
  // console.log('Counter', counter);
  return (
    <div className="rp-container">
      <div className="row rp-row">
        {details.map((det, i) => (

          <RelatedProductsList id={det.id} name={det.name} slogan={det.slogan} desc={det.description} cat={det.category} price={det.price} count={incrementCount()} key={i} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

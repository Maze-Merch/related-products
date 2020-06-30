import React from 'react';
import ModalCompareTable from './ModalCompareTable';

const Modal = ({displayModal, closeModal, currentProd, allProd}) => {
// console.log('displayModal', displayModal);

  // function getTableData(currentProd, allProd) {
    // I = objects with arrays of features
    // O = Checkmarks on each side with value of feature in the middle
    // C = None
    // E = Different length arrays
    // store data in array [yes, product details, yes]
      // mainProdFeatures
      // compProdFeatures - get id from clicked start
        // if allProd.idx === clicked id
          // first product
  //   for(let i = 0: i < currentProd.features.length; i += 1){
  //     for(let j = 0; j < allProd.length; j += 1){
  //       if(currentProd.id === allProd)
  //     }
  //   }
  // }

  function displayInfo() {
    return (
      <div className="modal-container">
        <h4>COMPARING</h4>
        <ModalCompareTable />
      </div>
    );
  }

  const divStyle = {
    display: displayModal ? 'block' : 'none',
  };

  function closeM(e) {
    e.stopPropagation();
    closeModal();
  }
  return (
    <div
      className="modal"
      onClick={closeModal}
      style={divStyle}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="close"
          onClick={closeM}
        >
          &times;
        </span>
        <div className="modal-flex">
          {displayInfo()}
        </div>
      </div>
    </div>
  );
};
export default Modal;

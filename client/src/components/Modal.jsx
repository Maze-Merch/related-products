import React from 'react';
import ModalCompareTable from './ModalCompareTable';

const Modal = ({displayModal, closeModal, currentProd, compProd}) => {
console.log('compProd', compProd);
console.log('currentProd', currentProd);

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

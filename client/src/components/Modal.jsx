import React from 'react';
import ModalCompareTable from './ModalCompareTable';

const Modal = ({displayModal, closeModal, currentProd, compProd, allProd}) => {
// console.log('compProd', compProd);
// console.log('currentProd', currentProd);

  function displayInfo() {
    return (
      <div className="modal-container">
        <h4>COMPARING</h4>
        <table className="table table-sm table-hover">
          <thead>
            <tr>
              <th scope="col">Product 1</th>
              <th scope="col">Product Info</th>
              <th scope="col">Product 2</th>
            </tr>
          </thead>
          <tbody>
            <ModalCompareTable currentProd={currentProd} compProd={compProd} />
          </tbody>
        </table>
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

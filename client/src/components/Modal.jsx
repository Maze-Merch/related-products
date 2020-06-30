import React from 'react';

const Modal = ({displayModal, closeModal, modalInfo}) => {
// console.log('displayModal', displayModal);

  function displayInfo() {
    return (
      <div className="modal-container">
        <p>COMPARING</p>
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

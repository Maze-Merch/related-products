import React from 'react';
import _ from 'lodash';
import ModalCompareTable from './ModalCompareTable';


const Modal = ({displayModal, closeModal, currentProd, compProd, allProd}) => {
  console.log(
    'Modal compProd', compProd,
    'Modal currentProd', currentProd,
  );


  const buildTable = () => {
  // account for diff lengths?
    const currFeat = currentProd.features;
    const compFeat = compProd.features;
    const tableRows = [];
    let tableRow = '';
    for (let i = 0; i <= currFeat.length - 1; i += 1) {
      let p1Feat = currFeat[i].feature;
      let p1Valu = currFeat[i].value;
      for (let j = 0; j <= compFeat.length - 1; j += 1) {
        // check if they have the same value
        let p2Feat = compFeat[j].feature;
        let p2Valu = compFeat[j].value;
        tableRow = `<tr>
          <td scope="row"><i className="fas fa-check"></i></td>
          <td>${p1Feat} - ${p1Valu}</td>
          <td>${p2Feat} - ${p2Valu}</td>
          <td><i className="fas fa-check"></i></td>
        </tr>`;
      }
      tableRows.push(tableRow);
    }
    tableRows.join('');
    // const parser = new DOMParser();
    // const tRows = parser.parseFromString(tableRows, 'text/html');
    // document.modal-table-body.innerHTML = tableRows;
    return tableRows;
  };

  function displayInfo() {
    // const {currentProd, compProd} = props;
    return (
      <div className="modal-container">
        <h4>COMPARING</h4>
        <table className="table table-sm table-hover">
          <thead>
            <tr>
              <th scope="col">{currentProd.name}</th>
              <th scope="col"></th>
              <th scope="col">{compProd.name}</th>
            </tr>
          </thead>
          <tbody id="modal-table-body">
            { !_.isEmpty(compProd)
              ? currentProd.features.map((val, i) => (
                <tr>
                  <td scope="row"><i className="fas fa-check" /></td>
                  <td> {val.feature} - {val.value}</td>
                  {compProd.features.map((compVal, i) => (
                    val.feature === compVal.feature ? <td><i className="fas fa-check" /></td> : <td><i className="far fa-times" /></td>
                  ))}
                </tr>
              ))
              : 'No comp product' }
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

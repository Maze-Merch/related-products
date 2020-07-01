import React from 'react';

const ModalCompareTable = (props) => {
  return (
      <>
        <tr>
          <td scope="row"><i className="fas fa-check"></i></td>
          <td>Cool Feature</td>
          <td><i className="fas fa-check"></i></td>
        </tr>
        <tr>
          <td scope="row"><i className="fas fa-check"></i></td>
          <td>Cool Feature</td>
          <td></td>
        </tr>
        <tr>
          <td scope="row"></td>
          <td>Cool Feature</td>
          <td><i className="fas fa-check"></i></td>
        </tr>
      </>
  )
}

export default ModalCompareTable;
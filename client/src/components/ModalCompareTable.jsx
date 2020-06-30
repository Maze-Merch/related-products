import React from 'react';

const ModalCompareTable = (props) => {
  return (
    <table className="table table-sm table-hover">
      <thead>
        <tr>
          <th scope="col">Product 1</th>
          <th scope="col">Product Info</th>
          <th scope="col">Product 2</th>
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
  )
}

export default ModalCompareTable;
import React from 'react';

const ModalCompareTable = ({currFeat, compFeat}) => {
  console.log(
    'Table currFeat', currFeat,
    'Table compFeat', compFeat,
  );

  const buildTable = () => {
    // account for diff lengths?
    const tableRows = [];
    for (let i = 0; i <= currFeat.length - 1; i += 1) {
      let p1Feat = currFeat[i].feature;
      let p1Valu = currFeat[i].value;
      for (let j = 0; j <= compFeat.length - 1; j += 1) {
        // check if they have the same value
        let p2Feat = currFeat[j].feature;
        let p2Valu = currFeat[j].value;
        let tableRow = `<tr>
          <td scope="row"><i className="fas fa-check"></i></td>
          <td>${p1Feat} - ${p1Valu}</td>
          <td>${p2Feat} - ${p2Valu}</td>
          <td><i className="fas fa-check"></i></td>
        </tr>`;
      }
      tableRows.push(tableRow);
    }
    tableRows.join('');
    return tableRows;
  };

  return (
      <>
        {buildTable()}
      </>
  )
}

export default ModalCompareTable;

// <tr>
//           <td scope="row"><i className="fas fa-check"></i></td>
//           <td>Cool Feature P1</td>
//           <td>Cool Feature P2</td>
//           <td><i className="fas fa-check"></i></td>
//         </tr>
//         <tr>
//           <td scope="row"><i className="fas fa-check"></i></td>
//           <td>Cool Feature P1</td>
//           <td>Cool Feature P2</td>
//           <td></td>
//         </tr>
//         <tr>
//           <td scope="row"></td>
//           <td>Cool Feature P1</td>
//           <td>Cool Feature P2</td>
//           <td><i className="fas fa-check"></i></td>
//         </tr>
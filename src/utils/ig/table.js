import React, { useState } from 'react';

const ReusableTable = ({ data }) => {
  const [tableData, setTableData] = useState([{}]);

  // Add a new row to the table
  const addRow = () => {
    setTableData([...tableData, {}]);
  };

  // Remove a row from the table
  const removeRow = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  };

  // Handle input change for a specific cell
  const handleInputChange = (e, rowIndex, columnName) => {
    const { value } = e.target;
    const updatedData = [...tableData];
    updatedData[rowIndex][columnName] = value;
    setTableData(updatedData);
  };

  // Submit table data as an array of objects
  const submitTableData = () => {
    console.log(tableData); // You can perform further actions with the tableData
  };

  // Handle file upload and update table data
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const jsonData = JSON.parse(event.target.result);
      setTableData(jsonData);
    };
    reader.readAsText(file);
  };

  // Render table rows with editable input fields
  const renderTableRows = () => {
    return tableData.map((row, index) => (
      <tr key={index}>
        {Object.keys(data).map((columnName) => (
          <td key={columnName}>
            <input
              type="text"
              value={row[columnName] || ''}
              onChange={(e) => handleInputChange(e, index, columnName)}
            />
          </td>
        ))}
        <td>
          <button onClick={() => removeRow(index)}>Delete</button>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(data).map((columnName) => (
              <th key={columnName}>{columnName}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
      <button onClick={submitTableData}>Submit</button>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default ReusableTable;









// import React, { useState } from 'react';

// const ReusableTable = ({ initialData }) => {
//   const [tableData, setTableData] = useState([{}]);

//   // Add a new row to the table
//   const addRow = () => {
//     setTableData([...tableData, {}]);
//   };

//   // Remove a row from the table
//   const removeRow = (index) => {
//     const updatedData = [...tableData];
//     updatedData.splice(index, 1);
//     setTableData(updatedData);
//   };

//   // Handle input change for a specific cell
//   const handleInputChange = (e, rowIndex, columnName) => {
//     const { value } = e.target;
//     const updatedData = [...tableData];
//     updatedData[rowIndex][columnName] = value;
//     setTableData(updatedData);
//   };

//   // Submit table data as an array of objects
//   const submitTableData = () => {
//     console.log(tableData); // You can perform further actions with the tableData
//   };

//   // Handle file upload and update table data
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const jsonData = JSON.parse(event.target.result);
//       setTableData(jsonData);
//     };
//     reader.readAsText(file);
//   };

//   // Render table rows with editable input fields
//   const renderTableRows = () => {
//     return tableData.map((row, index) => (
//       <tr key={index}>
//         {Object.keys(initialData).map((columnName) => (
//           <td key={columnName}>
//             <input
//               type="text"
//               value={row[columnName] || ''}
//               onChange={(e) => handleInputChange(e, index, columnName)}
//             />
//           </td>
//         ))}
//         <td>
//           <button onClick={() => removeRow(index)}>Delete</button>
//         </td>
//       </tr>
//     ));
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             {Object.keys(initialData).map((columnName) => (
//               <th key={columnName}>{columnName}</th>
//             ))}
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>{renderTableRows()}</tbody>
//       </table>
//       <button onClick={addRow}>Add Row</button>
//       <button onClick={submitTableData}>Submit</button>
//       <input type="file" onChange={handleFileUpload} />
//     </div>
//   );
// };

// export default ReusableTable;

// import React, { useState } from 'react';

// const ReusableTable = ({ initialData }) => {
//   const [tableData, setTableData] = useState([{}]);

//   // Add a new row to the table
//   const addRow = () => {
//     setTableData([...tableData, {}]);
//   };

//   // Remove a row from the table
//   const removeRow = (index) => {
//     const updatedData = [...tableData];
//     updatedData.splice(index, 1);
//     setTableData(updatedData);
//   };

//   // Handle input change for a specific cell
//   const handleInputChange = (e, rowIndex, columnName) => {
//     const { value } = e.target;
//     const updatedData = [...tableData];
//     updatedData[rowIndex][columnName] = value;
//     setTableData(updatedData);
//   };

//   // Submit table data as an array of objects
//   const submitTableData = () => {
//     console.log(tableData); // You can perform further actions with the tableData
//   };

//   // Handle file upload and update table data
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const jsonData = JSON.parse(event.target.result);
//       setTableData(jsonData);
//     };
//     reader.readAsText(file);
//   };

//   // Download table data as a JSON file
//   const downloadTableData = () => {
//     const jsonData = JSON.stringify(tableData, null, 2);
//     const blob = new Blob([jsonData], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'tableData.json';
//     link.click();
//   };

//   // Render table rows with editable input fields
//   const renderTableRows = () => {
//     return tableData.map((row, index) => (
//       <tr key={index}>
//         {Object.keys(initialData).map((columnName) => (
//           <td key={columnName}>
//             <input
//               type="text"
//               value={row[columnName] || ''}
//               onChange={(e) => handleInputChange(e, index, columnName)}
//             />
//           </td>
//         ))}
//         <td>
//           <button onClick={() => removeRow(index)}>Delete</button>
//         </td>
//       </tr>
//     ));
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             {Object.keys(initialData).map((columnName) => (
//               <th key={columnName}>{columnName}</th>
//             ))}
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>{renderTableRows()}</tbody>
//       </table>
//       <button onClick={addRow}>Add Row</button>
//       <button onClick={submitTableData}>Submit</button>
//       <input type="file" onChange={handleFileUpload} />
//       <button onClick={downloadTableData}>Download</button>
//     </div>
//   );
// };

// export default ReusableTable;


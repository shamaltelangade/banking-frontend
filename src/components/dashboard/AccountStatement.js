// import React, { useState } from 'react';
// import axios from 'axios';
// import './AccountStatement.css';

// const mockTransactions = [
//   {date: '2023-08-15', description:'deposit', amount: 100},
//   {date: '2023-08-15', description:'deposit', amount: 105}
// ]

// function AccountStatement() {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [transactions, setTransactions] = useState([]);

//   const handleGenerateStatement = async () => {
//     try {
//       const response = await axios.get(`/api/transactions`, {
//         params: {
//           startDate,
//           endDate,
//         },
//       });

//       setTransactions(response.data);
//     } catch (error) {
//       console.error('Error fetching transactions:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Account Statement</h1>
//       <div>
//         <label>Start Date: </label>
//         <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
//       </div>
//       <div>
//         <label>End Date: </label>
//         <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
//       </div>
//       <button onClick={handleGenerateStatement}>Generate Statement</button>
//       <h2>Transactions</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Description</th>
//             <th>Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((transaction, index) => (
//             <tr key={index}>
//               <td>{transaction.date}</td>
//               <td>{transaction.description}</td>
//               <td>{transaction.amount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AccountStatement;
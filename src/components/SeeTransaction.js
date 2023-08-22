import React,{useState,useEffect} from 'react';
import axios from'axios';
const AdminDashboard=()=>
{
    const[accounts,setAccounts]=useState([]);
    const[selectedAccount,setSelectedAccount]=useState(null);
    const [transactions,setTransactions]=useState([]);
    useEffect(()=>
    {
        axios.get('/api/accounts')
        .then(response=> setAccounts(response.data))
        .catch(error=>console.error('Error fetching accounts:', error));
    },[]);
    useEffect(()=>
    {
        if(selectedAccount)
        {
            axios.get('./api/accounts/${selectedAccount}/transactions')
            .then(response=>setTransactions(response.data))
            .catch(error=>console.error('Error fetching  transactions:',error));
        }
    },[selectedAccount]);
    const handleAccountSelect=(accountNumber)=>{
        setSelectedAccount(accountNumber);
    };
    return(
        <div>
        <h1>Admin Dashboard</h1>
        <div>
        <h2>Account list</h2>
        <ul>
            {accounts.map(account=>(
             <li key={account.accountNumber}>
                <button onClick={()=> handleAccountSelect(account.accountNumber)}>
                6475
                 </button>           
             </li>   
            ))}
        </ul>
        </div>
        <div>
            <h2>Transaction details</h2>
            {
                selectedAccount && (
                    <ul>
                        {transactions.map(transaction=>
                            (
                                <li key={transaction.id}>
                                date:{transaction.date}, Amount:{transaction.amount}
                            </li>
                                ))}
                    </ul>
                
            )}
            </div>
        </div>
    );
};
export default AdminDashboard;
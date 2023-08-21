import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

function AccSummary() {

    const baseURL = "http://localhost:8080/fetchAccounts/" + sessionStorage.getItem("uname");

    const [accountDetails, setAccountDetails] = useState([]);
    
    useEffect(() => {
        const fetchAccounts = () => {
            axios.get(baseURL).then((response) => {
                setAccountDetails(response.data);
            }).catch(error => {
                alert("Error occurred while loading data:" + error);
            });
        }
        fetchAccounts();
    },[]);

    const summaryURL ="http://localhost:8080/accountSummary?accountNo=";
    const [transactions,setTransaction] = useState([]);
    const [acc,setAcc] = useState("sel");
    
    const fetchTransaction = (val) =>{
        if(val != "sel") {
            setAcc(val);
            axios.get(summaryURL+val).then((response)=>{
                setTransaction(response.data);
            }).catch(error=>{
                alert("Error occurred while loading data:"+error);
            });
        }
    }

    // useEffect(()=>{
    //     fetchTransaction();
    // },[acc]);

    return(
         <div>
        <label htmlFor="accNum">Select Account</label>

            <select name="accNum" id="accNum" onChange={(event) => {
                let val = event.target.value;
                if(val != "sel") {
                    fetchTransaction(val);
                }
            }}>
            <option value="sel" key="sel">Select Account</option>
                {accountDetails.map((ac) => {
                    return (
                        <option value={ac.accountNo} key={ac.accountNo}>{ac.accountNo}</option>
                    );
                })
            }
            </select>
            {acc != "sel" ?     <Table striped>
        <thead>
            <tr>
                <th>Transaction Number</th>
                <th>Transaction Type</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {
            transactions.map((transaction) =>
                
                <tr >
                <td>{transaction.transactionId}</td>
                <td>transaction.transactionType</td>
                <td>₹ {transaction.tAmount}</td>
            </tr>
            )}
            
        </tbody>
    </Table> : <div><p>Select a account for fetching summary</p></div>}

</div>

    );
}
export default AccSummary;
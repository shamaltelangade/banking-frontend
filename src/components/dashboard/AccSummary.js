import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import Header from "./Header";

function AccSummary() {

    const baseURL = "http://localhost:8080/fetchAccounts/" + sessionStorage.getItem("uname");

    const [accountDetails, setAccountDetails] = useState([]);

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric"}
        return new Date(dateString).toLocaleDateString(undefined, options)
      }

    useEffect(() => {
        const fetchAccounts = () => {
            axios.get(baseURL).then((response) => {
                setAccountDetails(response.data);
            }).catch(error => {
                alert("Error occurred while loading data:" + error);
            });
        }
        fetchAccounts();
    }, []);

    const summaryURL = "http://localhost:8080/accountSummary?accountNo=";
    const [transactions, setTransaction] = useState([]);
    const [acc, setAcc] = useState("sel");

    const fetchTransaction = (val) => {
        if (val != "sel") {
            setAcc(val);
            axios.get(summaryURL + val).then((response) => {
                setTransaction(response.data);
            }).catch(error => {
                alert("Error occurred while loading data:" + error);
            });
        }
    }

    // useEffect(()=>{
    //     fetchTransaction();
    // },[acc]);

    return (
        <div>
            <Header />
            <label htmlFor="accNum">Select Account</label>

            <select name="accNum" id="accNum" onChange={(event) => {
                let val = event.target.value;
                if (val != "sel") {
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
            {acc != "sel" ? <Table striped>
                <thead>
                    <tr>
                        <th>Txn Date</th>
                        <th>Transaction Id</th>
                        <th>Description</th>
                        <th>Debit</th>
                        <th>Credit</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map((transaction) =>
                            <tr >
                                <td>{formatDate(transaction.date)}</td>
                                <td>{transaction.transactionId}</td>
                                <td>{transaction.senderAccountId == acc ? `${transaction.recieverAccountId != 0 ? 'TRANSFER TO ' + transaction.recieverAccountId : "SELF CASH WITHDRAWL"}`: `TRANSFER FROM ${transaction.senderAccountId}`}</td>
                                <td>{transaction.senderAccountId == acc ? transaction.tAmount: ""}</td>
                                <td>{transaction.senderAccountId == acc ? "" :transaction.tAmount}</td>
                                <td>₹ {transaction.instBalance}</td>
                            </tr>
                        )}

                </tbody>
            </Table> : <div><p>Select a account for fetching summary</p></div>}

        </div>

    );
}
export default AccSummary;
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    Table
} from 'reactstrap';

function Account() {

    const baseURL = "http://localhost:8080/fetchAccounts/" + sessionStorage.getItem("uname");

    const [accountDetails, setAccountDetails] = useState([]);

    const accountTypes = {
        "0": "Savings",
        "1": "Current",
        "2": "Salary"
    };

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


    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>Account Number</th>
                        <th>IFSC Code</th>
                        <th>Account Type</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        accountDetails.map((account) =>
                            <tr >
                                <td>{account.accountNo}</td>
                                <td>{account.ifsc}</td>
                                <td>{accountTypes[account.accountType]}</td>
                                <td>₹ {account.balance}</td>
                            </tr>
                        )}
                </tbody>
            </Table>

        </div>
    );
}
export default Account;
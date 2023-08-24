import React from "react";
import {
    Table
} from 'reactstrap';

function Account({accountDetails}) {

    const accountTypes = {
        "0": "Savings",
        "1": "Current",
        "2": "Salary"
    };

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
                            <tr key={account.accountNo}>
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
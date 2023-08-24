import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row, Table } from "reactstrap";
import AdminHeader from "./AdminHeader";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function AdminTransaction() {


    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const summaryURL = "http://localhost:8080/accountSummary?accountNo=";
    const [transactions, setTransaction] = useState([]);
    const [acc, setAcc] = useState("");

    const fetchTransaction = (val) => {
        axios.get(summaryURL + val).then((response) => {
            setTransaction(response.data);
        }).catch(error => {
            setTransaction([]);
            alert("Error occurred while loading data:" + error);
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
        if (acc.trim().length > 0) {
            fetchTransaction(acc);
        }
    }


    return (
        <>
            <AdminHeader />
            <Container style={{ marginTop: "80px" }}>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="account">Account No </Label>
                                <Input
                                    type="text"
                                    name="account"
                                    id="account"
                                    placeholder="Enter text"
                                    value={acc}
                                    onChange={e => setAcc(e.target.value)}
                                />
                            </FormGroup>
                            <Button color="primary">Get All Transactions</Button>
                        </Form>

                        {acc.trim().length > 9 ? transactions.length > 0 ? <Table className="mt-4" striped>
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
                                        <tr key={transaction.transactionId} >
                                            <td>{formatDate(transaction.date)}</td>
                                            <td>{transaction.transactionId}</td>
                                            <td>{transaction.senderAccountId == acc ? `${transaction.recieverAccountId != 0 ? 'TRANSFER TO ' + transaction.recieverAccountId : "SELF CASH WITHDRAWL"}` : `TRANSFER FROM ${transaction.senderAccountId}`}</td>
                                            <td>{transaction.senderAccountId == acc ? transaction.tAmount : ""}</td>
                                            <td>{transaction.senderAccountId == acc ? "" : transaction.tAmount}</td>
                                            <td>₹ {transaction.instBalance}</td>
                                        </tr>
                                    )}

                            </tbody>
                        </Table> : <div className="mt-4"><p>Selected account doesn't have any transactions</p></div> : <div className="mt-4"><p>Enter a valid account no for fetching summary</p></div>}

                    </Col>
                </Row>
            </Container>
        </>

    );
}
export default AdminTransaction;
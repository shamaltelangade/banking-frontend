import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, FormGroup, Input, Label, Row, Table } from "reactstrap";
import Header from "./Header";

function AccountStatement() {

    const baseURL = "http://localhost:8080/fetchAccounts/" + sessionStorage.getItem("uname");

    const [accountDetails, setAccountDetails] = useState([]);

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
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

    const summaryURL = "http://localhost:8080/accountStatement";
    const [transactions, setTransaction] = useState([]);
    const [acc, setAcc] = useState("sel");

    const fetchTransaction = (val, start, end) => {
        if (val != "sel") {
            setAcc(val);
            axios.get(summaryURL + `/${val}?startDate=${start}&endDate=${end}`).then((response) => {
                setTransaction(response.data);
            }).catch(error => {
                alert("Error occurred while loading data:" + error);
            });
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const startDate = formData.get('start');
        const endDate = formData.get('end');
        console.log(acc, startDate, endDate);
        fetchTransaction(acc, startDate, endDate);
    }

    return (
        <>
            <Header />
            <Container style={{ marginTop: "80px" }}>
                <Row>
                    <Col className="col-md-6 col-12" >
                        {/* <Label for="accNum">Select Account</Label> */}

                        <form onSubmit={submitHandler}>
                            <select className="form-select" name="accNum" id="accNum" onChange={(event) => {
                                let val = event.target.value;
                                if (val != "sel") {
                                    setAcc(val);
                                    setTransaction([]);
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

                            <FormGroup className="mt-2">
                                <Label for="start">Start Date</Label>
                                <Input
                                    id="start"
                                    name="start"
                                    type="date"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="end">
                                    End Date
                                </Label>
                                <Input
                                    id="end"
                                    name="end"
                                    type="date"
                                />
                            </FormGroup>

                            <Button type="submit">Get Account Statement</Button>
                        </form>

                    </Col>
                    <Col className="col-12">
                        {acc != "sel" ? transactions.length > 0 ? <>
                            <div className="mt-4">Showing {transactions.length} available transaction(s) between selected time frame</div>
                            <Table className="mt-4" striped>
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
                                            <tr key={transaction.transactionId}>
                                                <td>{formatDate(transaction.date)}</td>
                                                <td>{transaction.transactionId}</td>
                                                <td>{transaction.senderAccountId == acc ? `${transaction.recieverAccountId != 0 ? 'TRANSFER TO ' + transaction.recieverAccountId : transaction.tMode == "Cash Deposit" ? "SELF CASH DEPOSIT" : "SELF CASH WITHDRAWL"}` : `TRANSFER FROM ${transaction.senderAccountId}`}</td>
                                                <td>{transaction.senderAccountId == acc ? transaction.tMode == "Cash Deposit" ? "" : transaction.tAmount : ""}</td>
                                                <td>{transaction.senderAccountId == acc ? transaction.tMode == "Cash Deposit" ? transaction.tAmount : "" : transaction.tAmount}</td>
                                                <td>₹ {transaction.senderAccountId == acc ? transaction.instBalance : transaction.instBalanceReciever}</td>
                                            </tr>
                                        )}

                                </tbody>
                            </Table></> : <div className="mt-4">There are no transactions associated with this account</div> : <div className="mt-4"><p>Select an account for fetching summary</p></div>}
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default AccountStatement;
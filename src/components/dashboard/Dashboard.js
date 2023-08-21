import React, { useEffect, useState } from "react";
import axios from "axios";

import "./dashboard.css";
import Header from "./Header"
import { Container, Row, Col, Button } from "reactstrap";
import Account from "./Account";

const createNewAccountHandler = (event) => {
    // todo implement this
}

function Dashboard(){

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
    }, []);

    return (
       <>
        <Header accountDetails={accountDetails}/>
        <Container>
            <Row>
                <Col className="col-6 justify-content-start mb-4">
                    <h2>My Accounts</h2>
                </Col>
                <Col className="col-6 justify-content-end mb-4">
                    <Button onSubmit={createNewAccountHandler}>Create New Account</Button>
                </Col>
                <Col  className="col-12">
                    <Account accountDetails={accountDetails}/>
                </Col>
            </Row>
        </Container>
       </>

    );
}

export default Dashboard;
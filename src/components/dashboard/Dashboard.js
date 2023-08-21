import React from "react";
import "./dashboard.css";
import Header from "./Header"
import { Container, Row, Col, Button } from "reactstrap";
import Account from "./Account";

const createNewAccountHandler = (event) => {
    // todo implement this
}

function Dashboard(){

    return (
       <>
        <Header/>
        <Container>
            <Row>
                <Col className="col-6 justify-content-start mb-4">
                    <h2>My Accounts</h2>
                </Col>
                <Col className="col-6 justify-content-end mb-4">
                    <Button onSubmit={createNewAccountHandler}>Create New Account</Button>
                </Col>
                <Col  className="col-12">
                    <Account />
                </Col>
            </Row>
        </Container>
       </>

    );
}

export default Dashboard;
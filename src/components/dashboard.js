import React from "react";
import { Col, Container, Row } from "reactstrap";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import Transaction from "./transaction";
import Account from "./Account";
import createAccount from "./createAccount";
function Dashboard(){
    
    return(
        <Container>
            <Header/>
            <Row>
                <Col md={4}>
                    <ListGroup>
                        <Link className="list-group-item list-group-item-action" tag="a" to="/account">My Accounts</Link>
                        <Link className="list-group-item list-group-item-action" tag="a" to="/Transaction">Transaction</Link>
                    </ListGroup>
                </Col>
                <Col md={8}>
                   <Account/>
                   <createAccount />
                   <Transaction/>
                </Col>
            </Row>
        </Container>
        
    );
    
}
export default Dashboard;
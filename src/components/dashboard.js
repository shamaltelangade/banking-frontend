import React from "react";
import { Col, Container, Row } from "reactstrap";
import Menu from "./menu";
import Header from "./Header";
//import sessionStorage from 'sessionstorage';

const Dashboard = ( )=>{
    
    return(
        <Container>
            <Header/>
            <Row>
                <Col md={4}>
                    <Menu/>
                </Col>
                <Col md={8}>
                </Col>
            </Row>
        </Container>
    );
    
}
export default Dashboard;
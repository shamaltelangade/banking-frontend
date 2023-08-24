import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header"
import { Container, Row, Col } from "reactstrap";
import Account from "./Account";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from "react-router";


function Dashboard() {

    const navigate = useNavigate();

    const baseURL = "http://localhost:8080/fetchAccounts/" + sessionStorage.getItem("uname");

    const [accountDetails, setAccountDetails] = useState([]);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("sel");
    const accountTypes = {
        "0": "Savings",
        "1": "Current",
        "2": "Salary"
    };
    const options = [
        "0",
        "1",
        "2"
    ];
  
    const toggleModal = () => {
      setModalOpen(!modalOpen);
    };
  
    const handleOptionChange = e => {
      setSelectedOption(e.target.value);
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

    const handleSubmit = async e => {
        const username = sessionStorage.getItem("uname");

        e.preventDefault();

        if(selectedOption != "sel") {
            const formData = {
                accountType: selectedOption,
            };
    
            // Send a POST request to the API endpoint
            try {
                const response = await fetch(`http://localhost:8080/accounts?username=${username}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
    
                if (response.ok) {
                    console.log('Data submitted successfully!');
                    toggleModal(); // Close the modal after submitting
                    alert("Account created successfully");
                    navigate("/");
                } else {
                    console.error('Error submitting data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        else {
            console.log("cannot create acccount, account type invalid");
        }
    };



    return (
        <>
            <Header />
            <Container style={{ marginTop: "80px" }}>


                <Modal isOpen={modalOpen} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>Create New Account</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                            <Label for="dropdown">Account Type</Label>
              <Input
                type="select"
                id="dropdown"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="sel">Select account type</option>
                {options.map((key) => (
                  <option key={key} value={key}>
                    {accountTypes[key]}
                  </option>
                ))}
              </Input>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={handleSubmit}>Submit</Button>{' '}
                        <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Row>
                    <Col className="col-6 justify-content-start mb-4">
                        <h2>My Accounts</h2>
                    </Col>
                    <Col className="col-6 justify-content-end mb-4">
                        <Button onClick={toggleModal}>Create New Account</Button>
                    </Col>
                    <Col className="col-12">
                        <Account accountDetails={accountDetails} />
                    </Col>
                </Row>
            </Container>
        </>

    );
}

export default Dashboard;
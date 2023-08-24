import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Table } from 'reactstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './Header';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useNavigate } from 'react-router';


function SelfTransfer() {

    const navigate = useNavigate();

    const transactionURL = "http://localhost:8080/transaction";

    const [FromAccountNum, setFromAccountNum] = useState("sel");
    const [ToAccountNum, setToAccountNum] = useState("sel2");
    const [Amount, setAmount] = useState([]);

    const baseURL = "http://localhost:8080/fetchAccounts/" + sessionStorage.getItem("uname");
    const [accountDetails, setAccountDetails] = useState([]);

    const [modal, setModal] = useState(false);
    const [transactionId, setTransactionId] = useState("");

    const toggle = () => {
        if (modal) {
            setModal(!modal);
            navigate("/dashboard");
        }
        else {
            setModal(!modal);
        }
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

    const submitHandler = (event) => {
        event.preventDefault();
        if (FromAccountNum != "sel" && ToAccountNum != "sel2") {
            axios
                .post(transactionURL + `?sender=` + FromAccountNum + '&reciever=' + ToAccountNum, {
                    'tAmount': Amount,
                    'tMode': "Self Tranfer",
                    'tType': "Debit"
                })
                .then((response) => {
                    setTransactionId(response.data);
                    toggle();
                })
                .catch(error => {
                    alert("error===" + error.response ?? error.response.data);
                    console.log(error.response);
                });
        }
        else {
            alert("Transaction type and sender account are required fields");
        }
        // alert(FromAccountNum + " " + ToAccountNum + " " + Amount + " " + "  test");

    };

    return (
        <>
            <Header />
            <Container style={{ marginTop: "80px" }}>

                <Row>
                    <Col className='col-12'>
                        <h3>SELF TRANSFER</h3>
                    </Col>
                    <Col className='col-md-6 col-sm-12'>

                        <Modal
                            isOpen={modal}
                            modalTransition={{ timeout: 700 }}
                            backdropTransition={{ timeout: 1300 }}
                            toggle={toggle}
                        >
                            <ModalHeader toggle={toggle}>Transfer Successful</ModalHeader>
                            <ModalBody>
                                <Table striped bordered hover>


                                    <tbody>
                                        <tr>
                                            <td>Reference ID</td>
                                            <td>{transactionId}</td>
                                        </tr>

                                        <tr>
                                            <td>Transaction Mode</td>
                                            <td>Self Transfer</td>
                                        </tr>
                                        <tr>
                                            <td>Paid to Account</td>
                                            <td>{ToAccountNum}</td>
                                        </tr>

                                        <tr>
                                            <td>Amount</td>
                                            <td>₹ {Amount}</td>
                                        </tr>
                                        <tr>
                                            <td>From Account</td>
                                            <td>{FromAccountNum}</td>
                                        </tr>
                                        <tr>
                                            <td>Remarks</td>
                                            <td> </td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggle}>
                                    Ok
                                </Button>

                            </ModalFooter>
                        </Modal>
                        <Form onSubmit={submitHandler}>
                            <select className='form-select mt-3' name="accNum" id="accNum" onChange={(event) => {
                                let val = event.target.value;
                                if (val != "sel") {
                                    setFromAccountNum(val);
                                }
                            }}>
                                <option value="sel" key="sel">From Account</option>
                                {accountDetails.map((ac) => {
                                    return (
                                        <option value={ac.accountNo} key={ac.accountNo}>{ac.accountNo}</option>
                                    );
                                })
                                }
                            </select>

                            <select className='form-select mt-3' name="accNum" id="accNum" onChange={(event) => {
                                let val = event.target.value;
                                if (val != "sel2") {
                                    setToAccountNum(val);
                                }
                            }}>
                                <option value="sel2" key="sel2">To Account</option>
                                {accountDetails.map((ac) => {
                                    return (
                                        <option value={ac.accountNo} key={ac.accountNo}>{ac.accountNo}</option>
                                    );
                                })
                                }
                            </select>




                            <div className="mt-3">

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label> Amount</Form.Label>
                                    <Form.Control required type="text" onChange={(e) => setAmount(e.target.value)}></Form.Control>
                                </Form.Group>
                            </div>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>

                        </Form>
                    </Col>
                </Row>
            </Container >
        </>
    );
}

export default SelfTransfer;


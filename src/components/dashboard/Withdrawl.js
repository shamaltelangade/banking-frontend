import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Table } from 'reactstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './Header';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useNavigate } from 'react-router';

function Withdrawl() {

    const withdrawlURL = "http://localhost:8080/selfWithdrawl"
    const [FromAccountNum, setFromAccountNum] = useState("sel");
    const [Amount, setAmount] = useState("");
    const [Balance, setBalance] = useState("");
    const navigate = useNavigate();

    const baseURL = "http://localhost:8080/fetchAccounts/" + sessionStorage.getItem("uname");
    const [accountDetails, setAccountDetails] = useState([]);

    const [transactionId, setTransactionId] = useState("");

    const [modal, setModal] = useState(false);
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
        // alert(FromAccountNum + " " + Amount + " " +Balance+ " "+ "  test");
        if (FromAccountNum != "sel") {
            axios
                .post(withdrawlURL + `?sender=` + FromAccountNum, {
                    'tAmount': Amount,
                    'tMode': "Withdrawl",
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

    };

    return (
        <><Header />
            <Container style={{ marginTop: "80px" }}>
                <Row>
                    <Col className='col-12'>
                        <h3>CASH WITHDRAWL</h3>
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
                                            <td>Cash Withdrawl</td>
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
                            <select className='form-select mt-2 mb-3' name="accNum" id="accNum" onChange={(event) => {
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

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control required type="text" onChange={(e) => setAmount(e.target.value)}></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Balance</Form.Label>
                                <Form.Control disabled type="text" onChange={(e) => setBalance(e.target.value)} value={"dummy"} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Withdrawl;


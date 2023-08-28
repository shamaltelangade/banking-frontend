import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useNavigate } from 'react-router';


function TransactionForm() {

    const navigate = useNavigate();
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

    const transactionURL = "http://localhost:8080/transaction"
    const [BenificiaryAccountNum, setBenificiaryAccountNum] = useState("");
    const [SenderAccount, setSenderAccount] = useState("sel");
    const [BenificiaryName, setBenificiaryName] = useState("");
    const [Ifsc, setIfsc] = useState("");
    const [Amount, setAmount] = useState("");
    const [TransactionType, setTransactionType] = useState("sel");

    const submitHandler = (event) => {
        event.preventDefault();
        if(TransactionType != "sel" && SenderAccount != "sel") {
            axios
            .post(transactionURL + `?sender=` + SenderAccount + '&reciever=' + BenificiaryAccountNum, {
                'tAmount': Amount,
                'tMode': TransactionType,
                'tType': "Debit"
            })
            .then((response) => {
                // alert(response.data);
                setTransactionId(response.data);
                toggle();
            })
            .catch((error) => {
                alert("error===" + error.response ?? error.response.data);
                console.log(error.response);
            });
        }
        else {
            alert("Transaction type and sender account are required fields");
        }
    };

    return (
        <>
            <Header />

            <Container style={{ marginTop: "80px" }}>
                <Row>
                    <Col className='col-12'>
                        <h3>ONLINE TRANSFER</h3>
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
                                            <td>{TransactionType} </td>
                                        </tr>
                                        <tr>
                                            <td>Paid to Account</td>
                                            <td>{BenificiaryAccountNum}</td>
                                        </tr>
                                        <tr>
                                            <td>Amount</td>
                                            <td>₹ {Amount} </td>
                                        </tr>
                                        <tr>
                                            <td>From Account</td>
                                            <td> {SenderAccount}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={() => {
                                    toggle();
                                }}>
                                    Ok
                                </Button>
                            </ModalFooter>
                        </Modal>

                        <Form onSubmit={submitHandler}>

                            <Form.Select required className='mt-2' aria-label="type" onChange={(e) => setTransactionType(e.target.value)}>
                                <option value="sel">Select Transaction Type</option>
                                <option value="IMPS">IMPS</option>
                                <option value="RTGS">RTGS</option>
                                <option value="NEFT">NEFT</option>
                            </Form.Select>

                            <select required className='form-select mt-4' name="accNum" id="accNum" onChange={(event) => {
                                let val = event.target.value;
                                if (val != "sel") {
                                    setSenderAccount(val);
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

                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                <Form.Label> Beneficiary Name</Form.Label>
                                <Form.Control type="text" onChange={(event) => setBenificiaryName(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label> Beneficiary Account Number</Form.Label>
                                <Form.Control required type="text" onChange={(event) => setBenificiaryAccountNum(event.target.value)} />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="ifsc">
                                <Form.Label> IFSC Code</Form.Label>
                                <Form.Control type="text" onChange={(event) => setIfsc(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="amount">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control required type="text" onChange={(event) => setAmount(event.target.value)} />
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

export default TransactionForm;
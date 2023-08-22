import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './dashboard/Header';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function TransactionForm({ sender }) {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

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
    const [BenificiaryAccountNum, setBenificiaryAccountNum] = useState();
    const [SenderAccount, setSenderAccount] = useState();
    const [BenificiaryName, setBenificiaryName] = useState([]);
    const [Ifsc, setIfsc] = useState([]);
    const [Amount, setAmount] = useState([]);
    const [TransactionType, setTransactionType] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault();
        // alert(BenificiaryName + "  " + BenificiaryAccountNum + "  " + Ifsc + "  " + Amount + "  " + TransactionType);
        axios
            .post(transactionURL + `?sender=` + SenderAccount + '&reciever=' + BenificiaryAccountNum, {
                'tAmount': Amount,
                'tMode': TransactionType,
                'tType': "Debit"
            })
            .then((response) => {
                // alert(response.data);
                toggle();
            })
            .catch(error => {
                alert("error===" + error);
            });
    };


    return (
        <><Header />
            <Container className='mt-4'>
                <div className='self'>
                    <h1>ONLINE TRANSFER</h1>
                </div>
                <Row>
                    <Col className='col-md-6 col-sm-12'>
                        <Modal
                            isOpen={modal}
                            modalTransition={{ timeout: 700 }}
                            backdropTransition={{ timeout: 1300 }}
                            toggle={toggle}
                        // className={className}
                        >
                            <ModalHeader toggle={toggle}>Transfer Successful</ModalHeader>
                            <ModalBody>
                                <Table striped bordered hover>


                                    <tbody>
                                        <tr>
                                            <td>Reference ID</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Transaction Mode</td>
                                            <td>Dummy </td>
                                        </tr>
                                        <tr>
                                            <td>Paid to Account</td>
                                            <td> </td>
                                        </tr>

                                        <tr>
                                            <td>Amount</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td>From Account</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td>Date</td>
                                            <td> </td>
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
                                </Button>{' '}

                            </ModalFooter>
                        </Modal>
                        <Form onSubmit={submitHandler}>

                            <Form.Select aria-label="type" onChange={(e) => setTransactionType(e.target.value)}>
                                <option>Select Transaction Type</option>
                                <option value="IMPS">IMPS</option>
                                <option value="RTGS">RTGS</option>
                                <option value="NEFT">NEFT</option>
                            </Form.Select>

                            <select name="accNum" id="accNum" onChange={(event) => {
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

                            <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                                <Form.Label> Beneficiary Name</Form.Label>
                                <Form.Control type="text" onChange={(event) => setBenificiaryName(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label> Beneficiary Account Number</Form.Label>
                                <Form.Control type="text" onChange={(event) => setBenificiaryAccountNum(event.target.value)} />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="ifsc">
                                <Form.Label> IFSC Code</Form.Label>
                                <Form.Control type="text" onChange={(event) => setIfsc(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="amount">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="text" onChange={(event) => setAmount(event.target.value)} />
                            </Form.Group>

                            <Button variant="primary" type="submit" onSubmit={submitHandler}>
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
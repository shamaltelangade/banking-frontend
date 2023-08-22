import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col, Table } from 'reactstrap';
import './SelfTransfer.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './dashboard/Header';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function SelfTransfer() {
    const transactionURL = "http://localhost:8080/transaction"
    const [FromAccountNum, setFromAccountNum] = useState("sel");
    const [ToAccountNum, setToAccountNum] = useState("sel2");
    const [Amount, setAmount] = useState([]);
    //const [SenderAccount, setSenderAccount] = useState();

    const baseURL = "http://localhost:8080/fetchAccounts/" + sessionStorage.getItem("uname");
    const [accountDetails, setAccountDetails] = useState([]);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

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
        // alert(FromAccountNum + " " + ToAccountNum + " " + Amount + " " + "  test");
        axios
            .post(transactionURL + `?sender=` + FromAccountNum + '&reciever=' + ToAccountNum, {
                'tAmount': Amount,
                'tMode': "Self Tranfer",
                'tType': "Debit"
            })
            .then((response) => {
                // alert(response.data);
                // if (response.data == "Withdrawl process successful") {
                //     alert("Money Transferred Successfully");
                // }
                // else {
                //     alert("Insufficient Balance");
                // }
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
                    <h1>SELF TRANSFER</h1>
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
                        <select name="accNum" id="accNum" onChange={(event) => {
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

                        <select name="accNum" id="accNum" onChange={(event) => {
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




                        <div className="k">

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="text" onChange={(e) => setAmount(e.target.value)}></Form.Control>
                            </Form.Group>
                        </div>

                        <Button variant="primary" type="submit" onSubmit={submitHandler}>
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


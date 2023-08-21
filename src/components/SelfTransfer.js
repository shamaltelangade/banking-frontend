import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col } from 'reactstrap';
import './SelfTransfer.css';
import axios from 'axios';
import { useState } from 'react';
import Header from './dashboard/Header';

function SelfTransfer() {
    const transactionURL = "https://localhost8080/transaction"
    const [FromAccountNum, setFromAccountNum] = useState([]);
    const [ToAccountNum, setToAccountNum] = useState([]);
    const [Amount, setAmount] = useState([]);


    const submitHandler = (event) => {
        event.preventDefault();
        alert(FromAccountNum + " " + ToAccountNum + " " + Amount + " " + "  test");
        axios
            .post(transactionURL + `?sender=` + FromAccountNum + '&reciever=' + ToAccountNum, {
                'tAmount': Amount,
                'tMode': "Self Tranfer",
                'tType': "Debit"
            })
            .then((response) => {
                alert(response.data);
                if (response.data == "Withdrawl process successful") {
                    alert("Money Transferred Successfully");
                }
                else {
                    alert("Insufficient Balance");
                }
            })
            .catch(error => {
                alert("error===" + error);
            });
    };

    return (
        <><Header/>
        <Container className='mt-4'>
            <div className='self'>
                <h1>SELF TRANSFER</h1>
            </div>
            <Row>
                <Col className='col-md-6 col-sm-12'>
                    <Form onSubmit={submitHandler}>
                        <Form.Select aria-label="type" onChange={(e) => setFromAccountNum(e.target.value)}>
                            <option>From Account Number</option>
                            <option value="14356784565">14356784565</option>
                            <option value="76459853983">76459853983</option>
                            <option value="56196938503">56196938503</option>
                        </Form.Select>


                        <Form.Select aria-label="type" onChange={(e) => setToAccountNum(e.target.value)}>
                            <option>To Account Number</option>
                            <option value="14356784565">14356784565</option>
                            <option value="76459853983">76459853983</option>
                            <option value="56196938503">56196938503</option>
                        </Form.Select>




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
        </Container>
        </>
    );
}

export default SelfTransfer;


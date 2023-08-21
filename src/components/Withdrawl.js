import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { useState } from 'react';
import Header from './dashboard/Header';


function Withdrawl() {
    const withdrawlURL = "https://localhost8080/withdrawl"
    const [FromAccountNum, setFromAccountNum] = useState([]);
    const [Amount, setAmount] = useState([]);
    const [Balance, setBalance] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault();
        alert(FromAccountNum + " " + Amount + " " +Balance+ " "+ "  test");
        axios
            .post(withdrawlURL + `?sender=` + FromAccountNum, {
                'tAmount': Amount,
                'tMode': "Withdrawl",
                'tType': "Debit"
            })
            .then((response) => {
                alert(response.data);
                if (response.data == "Withdrawl process successful") {
                    alert("Money Withdrawn Successfully");
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
                <h1>WITHDRAWL</h1>
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









                        <div className="k">

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="text" onChange={(e) => setAmount(e.target.value)}></Form.Control>
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Balance</Form.Label>
                            <Form.Control disabled type="text" onChange={(e)=>setBalance(e.target.value)}value={"dummy"} />
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


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Alert, Row, Col , Container, Form} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AdminLogin = () => {
    const baseURL = "http://localhost:8080/adminlogin"
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value)
    }
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const saveData = (res) => {
        sessionStorage.setItem("AdminName", res);
    }

    const submitActionHandler = (event) => {
        event.preventDefault();
        axios.post(baseURL,{ 
            username : username,
            password: password
        })
            .then((response) => {
                console.log(response.data, response.status);
                if (response.status === 200) {
                    saveData(username);
                    navigate('/dashboard');
                }
                else {
                    setError('Unknown error occurred, please try again!');
                }
            })
            .catch((err) => {
                console.log(err.response.data);
                if (err.response != null) {
                    setError('Error: ' + err.response.data);
                }
                else {
                    setError('Unknown error occurred, please try again!');
                }
            });
    };
    return (
       
        <Container style={{  marginTop: "12%" }} >

            <Row className="landing">
                <Col >

                    <Form style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }} onSubmit={submitActionHandler}>
                        <Form.Group >
                            <Form.Label>Enter your username</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Username" value={username} onChange={usernameChangeHandler} />
                        </Form.Group>
                        <br/>
                        <Form.Group >
                            <Form.Label>Enter your password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" value={password} onChange={passwordChangeHandler} />
                        </Form.Group>
                        <br/>
                       
                        <Button onSubmit={submitActionHandler}>Submit</Button>
                    </Form>

                </Col>
                <Col>
                    <div style={{ width: "80%", marginRight: "10%", marginTop: "10%" }}>
                        <h1>Welcome Admin !</h1>
                        <h3>This is Admin Login </h3>
                    </div>
                </Col>
            </Row>
        </Container>

    );
}

export default AdminLogin;
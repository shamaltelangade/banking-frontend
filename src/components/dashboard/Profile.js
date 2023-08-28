import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import { Col, Container, Row } from 'reactstrap';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import UserDetails from '../admin/UserDetails';

const ProfilePage = () => {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let uname = sessionStorage.getItem("uname");
    axios.get(`http://localhost:8080/customer/${uname}`)
      .then(response => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <Header />
      <Container style={{marginTop: "80px"}}>
        <Row>
          <Col className='col-md-6 col-12'>
      {loading ? (
        <p>Loading user data...</p>
      ) : (
        <div className=" justify-content-center" >
        <Card>
          <CardBody>
            <CardTitle tag="h2">My Profile</CardTitle>
            <UserDetails user={userData}/>
          </CardBody>
        </Card>
      </div>
      )}
          </Col>
        </Row>
      </Container>
      
    </>
  );
};

export default ProfilePage;
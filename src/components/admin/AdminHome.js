import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, Col, Row, Container } from 'reactstrap'; // Import Card components
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminHome.css';

function AdminHome() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/getAllUsers');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        <Col className='mt-4'>
          <h1>Admin  Dashboard</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="card-container mt-4">
              {data.map((item) => (
                <Card key={item.username} className="data-card">
                  <CardBody>
                    <CardTitle>Username: {item.username}</CardTitle>
                    <CardText>Email: {item.email}</CardText>
                    <CardText>Aadhar No: {item.aadhar}</CardText>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default AdminHome;
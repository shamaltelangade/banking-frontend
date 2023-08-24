import React, { useState, useEffect } from 'react';
import { Col, Row, Container, Badge } from 'reactstrap'; // Import Card components
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHeader from './AdminHeader';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';
import UserDetails from './UserDetails';

function AdminHome() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState('0');

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

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
    <>
      <AdminHeader />
      <Container className='mb-4' style={{marginTop: "80px"}}>
        <Row>
          <Col>
            <h1>All Users</h1>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="card-container mt-4">
                <Accordion open={open} toggle={toggle}>
                  {data.map((user, index) => (
                    <AccordionItem key={index} title={user.username} className='mt-4'>
                      <AccordionHeader targetId={index.toString()}>
                        <h4>{user.username}</h4>
                        <Badge className='ms-4' color={user.locked && user.active ? "success": "danger"}>
    {user.active != true ? "Account Inactive" : user.locked ? "Account Locked" : "Account Active"}
  </Badge>
 
                      </AccordionHeader>
                      <AccordionBody accordionId={index.toString()}>
                        <UserDetails user={user}/>
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>

              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminHome;
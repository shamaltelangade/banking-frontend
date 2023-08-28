import React, { useState, useEffect } from 'react';
import { Col, Row, Container, Badge, Button, Input, FormGroup, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHeader from './AdminHeader';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody, CustomInput } from 'reactstrap';
import UserDetails from './UserDetails';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminHome() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  const navigate = useNavigate();

  const [filteredData, setFilteredData] = useState([]);
  const [filterBy, setFilterBy] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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
        setFilteredData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const handleFilter = property => {
    const filtered = data.filter(u => u[property] === filterBy);
    setFilteredData(filtered);
  };

  const handleSearch = event => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = data.filter(u =>
      u.username.toLowerCase().includes(searchTerm) ||
      (u.email && u.email.toLowerCase().includes(searchTerm)) ||
      (u.firstName && u.firstName.toLowerCase().includes(searchTerm)) ||
      (u.lastName && u.lastName.toLowerCase().includes(searchTerm)) ||
      (u.aadhar && u.aadhar.toLowerCase().includes(searchTerm)) ||
      (u.mobileNo && u.mobileNo.toLowerCase().includes(searchTerm))
    );
    setFilteredData(filtered);
  };


  const handleUserStatus = async (type, username, curr) => {
    const ep = type == 'active' ? 'toggleActive' : 'toggleLock';
    try {
      const response = await axios.put(`http://localhost:8080/user/${ep}/${username}`);
      // const jsonData = await response.json();
      console.log(response.data, data[type]);
      alert(`${username}'s account has been ${type == 'active' ? (curr ? 'deactivated' : 'activated') : (curr ? 'unlocked' : 'locked')}`);
      navigate('/');
    } catch (error) {
      console.error('Error changing user status:', error);
    }
  }

  return (
    <>
      <AdminHeader />
      <Container className='mb-4' style={{ marginTop: "80px" }}>
        <Row className='align-items-center'>
          <Col className='col-lg-9 col-md-7 col-12'>
            <Input
              type="text"
              placeholder="Search by username or other fields ..."
              value={searchTerm}
              onChange={handleSearch}
              className="mt-2"
            />
          </Col>

          <Col className='col-lg-3 col-md-5 mt-2 col-12 justify-content-center'>
            <FormGroup switch>
              <Input
                type="switch"
                checked={active}
                onChange={() => {
                  if (!active) {
                    setActive(!active);
                    setSearchTerm('');
                    handleFilter('active')
                  }
                  else {
                    setActive(!active);
                    setFilteredData(data);
                    setSearchTerm('');
                  }
                }}
              />
              <Label check>Filter by active accounts</Label>
            </FormGroup>
          </Col>
          <Col className='col-12'>
            {/* <h1 style={{color: "black"}}>All Users</h1> */}
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="card-container mt-4">
                <Accordion open={open} toggle={toggle}>
                  {filteredData.length > 0 ? filteredData.map((user, index) => (
                    <AccordionItem key={index} title={user.username} className='mt-4'>
                      <AccordionHeader targetId={index.toString()}>
                        <h4>{user.username}</h4>
                        <Badge className='ms-4' color={!user.locked ? "success" : "danger"}>
                          {user.locked ? "Account Locked" : "Account Unlocked"}
                        </Badge>
                        <Badge className='ms-4' color={user.active ? "success" : "danger"}>
                          {user.active != true ? "Account Inactive" : "Account Active"}
                        </Badge>

                      </AccordionHeader>
                      <AccordionBody accordionId={index.toString()}>
                        <Row>
                          <Col className='col-3'>
                            <Button onClick={() => handleUserStatus('active', user.username, user.active)} color={user.active ? 'danger' : 'success'} className="mr-2">
                              {user.active ? 'Deactivate' : 'Activate'} User
                            </Button>
                          </Col>
                          <Col className='col-3'>
                            <Button onClick={() => handleUserStatus('locked', user.username, user.locked)} color={user.locked ? 'success' : 'danger'}>
                              {user.locked ? 'Unlock' : 'Lock'} User
                            </Button>
                          </Col>
                        </Row>
                        <UserDetails user={user} />
                      </AccordionBody>
                    </AccordionItem>
                  )) : <div className='mt-4'>No users found!</div>}
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
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { useAuth } from '../../utils/UserContext';


function AdminHeader () {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const {logout} = useAuth();

  return (

      <Navbar dark color='dark' fixed="top" expand='md' container='md'>
        <NavbarBrand href="/admin">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/adminTransactions">Transactions</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Welcome ADMIN</NavbarText>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/" onClick={() => {
                logout(true);
              }}>Sign Out</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

  );
}

export default AdminHeader;
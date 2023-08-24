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
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

import { useAuth } from '../../utils/UserContext';


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const { logout } = useAuth();

    return (

        <Navbar dark color='dark' fixed="top" expand='md' container='md'>
            <NavbarBrand href="/dashboard">Home</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="//bankStatement">Bank Statement</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/accSummary">Account Summary</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Transaction
                        </DropdownToggle>
                        <DropdownMenu end>
                            <DropdownItem>
                                <a className="dropdown-item" href="/cashWithdrawl">Cash Withdrawl</a>
                            </DropdownItem>
                            <DropdownItem>
                                <a className="dropdown-item" href="/onlineTransfer">Online Transfer</a>
                            </DropdownItem>

                            <DropdownItem>
                                <a className="dropdown-item" href="/selfTransfer">Self Transfer</a>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>Welcome USER</NavbarText>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink href="/profile">My Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/" onClick={() => {
                            logout(false);
                        }}>Sign Out</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

    );
}

export default Header;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";


function Header() {

    let user = sessionStorage.getItem("uname");

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <Container>
                <a class="navbar-brand" href="/dashboard">Wells Fargo</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">


                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/bankStatement">Bank Statement</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/accSummary">Account Summary</a>
                        </li>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Transaction
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <a class="dropdown-item" href="/cashWithdrawl">Cash Withdrawl</a>
                                </DropdownItem>
                                <DropdownItem>
                                    <a class="dropdown-item" href="/onlineTransfer">Online Transfer</a>
                                </DropdownItem>
                                {/* <DropdownItem divider /> */}
                                <DropdownItem>
                                    <a class="dropdown-item" href="/selfTransfer">Self Transfer</a>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        

                    </ul>

                </div>
            </Container>
        </nav>
    );


    {/* return  (



        <header className="main-page-header mb-3 bg-primary">
        <div className="container d-flex align-item-centre">
            
            <nav className="navigation">
                <li><a href="/dashboard">Wells Fargo </a></li>
                <li><a href="/bankStatement">Bank Statement </a></li>
                <li><a href="/transaction">Transaction</a></li>
                <li><a href="/accSummary">Account Summary</a></li>
            </nav>
            <div className="display-name ms-auto text-white ">
                <i className="fa fa-circle text-success me-2"></i>Welcome : <span>USER</span>
                <a href="" className="btn btn-sm text-white">
                <i className="fas fa-sign-out-alt" aria-hidden="true"></i> <span>Sign Out</span>
                </a>
            </div>
        </div>
    </header>
    ); */}
}
export default Header;
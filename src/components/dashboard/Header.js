import React from "react";

function Header(){
    
    let user= sessionStorage.getItem("uname");

    return  (
        <header className="main-page-header mb-3 bg-primary">
        <div className="container d-flex align-item-centre">
            <div  className="company-name">Wells Fargo</div>
            <nav className="navigation">
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
    );
}
export default Header;
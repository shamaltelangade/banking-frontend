import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

function Menu(){
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/Account">My Accounts</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/Transaction">Transaction</Link>
        </ListGroup>
    );
}
export default Menu;
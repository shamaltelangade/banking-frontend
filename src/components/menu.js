import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

const Menu = () =>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/">My Accounts</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/">Transaction</Link>
        </ListGroup>
    );
}
export default Menu;
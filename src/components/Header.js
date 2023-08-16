import React from "react";
import { Card,CardBody} from "reactstrap";

function Header({name,title}){
    let user= sessionStorage.getItem("uname");
    
    return  (
        <div>
            <Card className="my-2 ">
                <CardBody>
                    <h1>Welcome {user}</h1>
                </CardBody>
            </Card>
        </div>
    );
}
export default Header;
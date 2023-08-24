import React from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { Card, CardBody, CardFooter, CardTitle } from 'reactstrap';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="not-found-container">
      <Card className="not-found-card">
        <CardBody>
          <CardTitle tag="h1">404: Page Not Found</CardTitle>
          <div className="icon">
            <AiOutlineExclamationCircle size={100} />
          </div>
          <p>Sorry, the page you are looking for does not exist.</p>
          <CardFooter>
            <Link style={{textDecoration: "none"}} to="/"> <BiArrowBack size={20} />  Go back to the website</Link>
          </CardFooter>
        </CardBody>
      </Card>
    </div>
  );
}

export default PageNotFound;
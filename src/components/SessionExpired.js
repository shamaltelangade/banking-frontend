import React from 'react';
import './SessionExpired.css';
class Expired extends React.Component
{
    handleSubmit=(event)=>{
        event.preventDefault();
    };
    render()
    {
        return(
            <div>
<div className="a">
            <h1>Your Session has been Expired. Please log in again</h1>
            </div>
            <br/>
            <form onSubmit={this.handleSubmit}>
                <div className="b">
            <button id ="b6" type="login">Login</button>
            </div>
            </form>
            </div>
        );
    }
}
export default Expired;
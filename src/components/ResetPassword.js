import React,{useState} from 'react';
import './Reset.css';

function ForgotPasswordPage(){
    const [email,setEmail]=useState('');
    const[message,setMessage]=useState('');
    const handleEmailChange=(event)=>{
        setEmail(event.target.value);
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        setMessage('Password reset link sent to ${email}');
    };
    return(
        <div>
            <div className="fp">
            <h1>Forgot Password</h1>
            <br/>
            
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange}/>
                </label>
                <br/>
                
                <button id ="b1" type="submit">Reset Password</button>
              
            </form>
            </div>
            <p>{message}</p>
        </div>
    );
};
export default ForgotPasswordPage;
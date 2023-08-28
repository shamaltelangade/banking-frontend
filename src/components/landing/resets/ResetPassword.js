import React, { useState } from 'react';
import './ResetPassword.css';


const ResetPassword = () =>{

    let [error, setError] = useState('');

    function submitActionHandler(event) {
        event.preventDefault();
        setError('Password Reset request has been submitted')
    }

    return(
    <div className="sec">
        <div className="fbox">
            <div className="f-value">
                <form onSubmit={submitActionHandler}> 
                    <h2>Reset Password</h2>
                    <div className='login-input'>
                        <input type="email" name='email'  required></input>
                        <label>Email</label>
                    </div>
                    <div className='login-input'>
                        <input type="password" name='otp' required minLength={6} maxLength={6}></input>
                        <label>OTP</label>
                    </div>
                    <p className='error-text'>
                        {error}
                    </p>
                   
                    <button type='submit'>Submit</button>
                   
                </form>
            </div>
        </div>
    </div>
    );
}


export default ResetPassword;
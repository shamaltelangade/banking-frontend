import React, { useState } from 'react';
import './ForgetUserId.css';


const ForgetUserId = () =>{

    let [error, setError] = useState('');

    function submitActionHandler(event) {
        event.preventDefault();
        setError('User ID Reset request has been submitted')
    }

    return(
    <div className="sec">
        <div className="fbox">
            <div className="f-value">
                <form onSubmit={submitActionHandler}> 
                    <h2>Reset User ID</h2>
                    <div className='login-input'>
                        <input type='number' name='account' required minLength={10} maxLength={10}></input>
                        <label>Account Number</label>
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


export default ForgetUserId;
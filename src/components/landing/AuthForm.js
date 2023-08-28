import React from 'react';
import './Login.css';

const AuthForm = ({ isLogin, onSubmit, error }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const userData = {
            username: formData.get('username'),
            password: formData.get('password'),
        };
        onSubmit(userData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <h2>Login</h2> */}
            <div className='login-input'>
                <input type="text" name='username' required></input>
                <label>Username</label>
            </div>
            <div className='login-input'>
                <input type="password" name='password' required ></input>
                <label>Password</label>
            </div>
            <div>
                <p className='error-text'>
                    {error}
                </p>
            </div>
            <div className='forget'>
                <a href='/forgetPassword'>Forget Password ?</a>
            </div>
            <div className='forget'>
                <a href='/forgetUserId'>Forget UserId ?</a>
            </div>
            <button type='submit'>Log In</button>
            <div className='register'>
                <p>Don't have a account? <a href='/register'>  Register</a></p>
            </div>
        </form>
    );
};

export default AuthForm;
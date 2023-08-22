import React, {useState} from 'react';
import axios from "axios";
import './login.css';
import {useNavigate} from "react-router-dom";


const Login = () =>{

    const baseURL = "http://localhost:8080/login";

    const navigate = useNavigate();

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const [error, setError] = useState('');

    const usernameChangeHandler=(event)=>{
        setUsername(event.target.value) 
    }
    const passwordChangeHandler=(event)=>{
        setPassword(event.target.value) 
    }

    const saveData = (res) => {
        sessionStorage.setItem("uname",res);
    }

    const submitActionHandler = (event)=>{
        event.preventDefault();
        axios.post(baseURL, {
            username: username,
            password: password
        })
        .then((response)=>{
            console.log(response.data, response.status);
            if(response.status === 200)
            {
                saveData(username);
                navigate('/dashboard');
            }
            else {
                setError('Unknown error occurred, please try again!');
            }
        })
        .catch((err) => {
            console.log(err.response.data);
            if(err.response != null) {
                setError('Error: ' + err.response.data);
            }
            else {
                setError('Unknown error occurred, please try again!');
            }
        });
    };


    return(
    <div className="sec">
        <div className="fbox">
            <div className="f-value">
                <form onSubmit={submitActionHandler}> 
                    <h2>Login</h2>
                    <div className='input'>
                        <input type="text" value={username}onChange={usernameChangeHandler} required></input>
                        <label>Username</label>
                    </div>
                    <div className='input'>
                        <input type="password" value={password} onChange={passwordChangeHandler} required ></input>
                        <label>Password</label>
                    </div>
                    <p className='error-text'>
                        {error}
                    </p>
                    <div className='forget'>
                        <a href='/'>Forget Password</a>
                    </div>
                    <button type='submit'>Log In</button>
                    <div className='register'>
                        <p>Don't have a account ? <a href='/register'>Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}


export default Login;
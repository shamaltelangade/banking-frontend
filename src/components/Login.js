import React, {useState} from 'react';
import axios from "axios";
import './login.css';
import {useNavigate} from "react-router-dom";
//import sessionStorage from "sessionstorage";

const Login = () =>{

    const baseURL = "https://localhost:8080/login";
    const navigate = useNavigate();
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

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
        axios
        .post(baseURL,{
            username: username,
            password: password
        })
        .then((response)=>{
            console.log(response.data)
            if(response.data === 'login Success !')
            {
                saveData(username);
                navigate('/dashboard');
            }
            else{
                alert("Invalid credentials !")
            }
            
        })
        .catch(error => {
            alert("error==="+error);
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
                    <div className='forget'>
                        <a href='#'>Forget Password</a>
                    </div>
                    <button type='submit'>Log In</button>
                    <div className='register'>
                        <p>Don't have a account ? <a href='#'>Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}
export default Login
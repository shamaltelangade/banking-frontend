import React,{useState} from 'react';
import "./CreatePassword.css"
function Create()
{
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const[message,setMessage]=useState('');
    const handlePasswordChange=(e)=>
    {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordChange=(e)=> {
        setConfirmPassword(e.target.value);
    };
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        if(password==confirmPassword)
        {

            setMessage('Password confirmed!');
        }
        else{
            setMessage('Passswords do not match.');
        }
    };
    return(
        <div className="s">
            <h1>Create and Confirm new password</h1><br/>
            <form onSubmit={handleSubmit}>
        <label>
        New password:
        <input type="password" value={password} onChange={handlePasswordChange}/>
        </label>
        <br/><br/>
    
            <label>
                Confirm New Password:
                <input type="password" value={confirmPassword} onchange={handleConfirmPasswordChange}/>
            </label>
            <br/>
        <button id="b3" type="submit">Submit</button>
        </form> 
           
          </div>
    );
}
export default Create;
import React, {useState} from 'react'
import './ForgetUserId.css'
function ForgetUserId()
{
    const[AccountNumber,setAccountNumber]=useState('');
    const[Otp,setOtp]=useState('');
    const fixedValue='1234';
    const[message,setMessage]=useState('');
    const handleAccountNumber=(e)=>
    {
        setAccountNumber(e.target.value);
    };
    const handleOtp=(e)=> {
        setOtp(e.target.value);
    };
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        if(Otp===fixedValue)
        {

            setMessage('Otp is verified!');
        }
        else{
            setMessage('Otp is wrong!');
        }
    };
    return(
        <div className="p">
            <h1>Forgot User Id</h1><br/>
            <form onSubmit={handleSubmit}>
                <div className='u'>
        <label>
            Account Number:
        <input type="text" value={AccountNumber} onChange={handleAccountNumber}/>
        </label>
        </div>
        <br/><br/>
    <div classNme="y">          
     <label>
               Otp :
                <input type="text" value={Otp} onChange={handleOtp}/>
            </label>
            </div>
 
            <br/><br/>
        <button id="b1" type="submit">Submit</button>
        </form> 
           
          </div>
    );
}
export default ForgetUserId;
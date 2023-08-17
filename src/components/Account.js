import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    Table
  } from 'reactstrap';
//import { useNavigate } from "react-router-dom";
function Account(){
    //const navigate = useNavigate();
    const baseURL="https://localhost:8080/fetchAccounts/"+sessionStorage.getItem("uname");
    const [accounts,setAccount] = useState([]);
    
    const fetchAccounts = () =>{
        axios.get(baseURL).then((response)=>{
            setAccount(response.data);
        }).catch(error=>{
            alert("Error occurred while loading data:"+error);
        });
    }
    useEffect(()=>{
        fetchAccounts();
    },[]);

    
    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>Account Number</th>
                        <th>IFSC</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    accounts.map(account=>
                        <tr >
                        <td>account.accNum</td>
                        <td>account.ifsc</td>
                        <td>account.balance</td>
                    </tr>
                    )}
                    
                </tbody>
            </Table>
        
        </div>
    );
}
export default Account;
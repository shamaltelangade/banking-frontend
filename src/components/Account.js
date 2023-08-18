import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    Table
  } from 'reactstrap';

  function Account(){
    const baseURL="http://localhost:8080/fetchAccounts/"+sessionStorage.getItem("uname");
    const detailURL="http://localhost:8080/" ;
    const [accounts,setAccount] = useState([]);
    const [details,setDetails] = useState([]);
    
    const fetchAccounts = () =>{
        axios.get(baseURL).then((response)=>{
            setAccount(response.data);
        }).catch(error=>{
            alert("Error occurred while loading data:"+error);
        });
    }
    useEffect(()=>{
        fetchAccounts().then((res) => {
            accounts.forEach((a) =>{
                fetchAccountDetails(a);
            });
        });

    },[]);

    const fetchAccountDetails = (account) =>{
        axios.get(baseURL+account).then((response)=>{
            setDetails(response.data);
        }).catch(error=>{
            alert("error :"+error);
        });
    }
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
                    accounts.map((account) =>
                        
                        <tr >
                        <td>details.accNum</td>
                        <td>details.ifsc</td>
                        <td>details.balance</td>
                    </tr>
                    )}
                    
                </tbody>
            </Table>
        
        </div>
    );
}
export default Account;
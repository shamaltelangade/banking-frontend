import React from "react";
import { useState } from "react";
import axios from "axios";
function Profile(){
const userURL ="http://localhost:8088/user";
let user= sessionStorage.getItem("uname");
const [details,setDetails] = useState([]);
const fetchUserDetails = () =>{
    axios.get(userURL).then((response)=>{
        setDetails(response.data);
    }).catch(error=>{
        alert("error :"+error);
    });
}

    return (
        
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Full Name</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{details.title} {details.firstName} {details.middleName} {details.lastName}</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{details.email}</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Mobile</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{details.mobile}</p>
              </div>
            </div>
            <hr />
            </div>
    );
}
export default Profile;
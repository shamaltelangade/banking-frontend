import React from "react";
import "./dashboard.css";
import Header from "./Header"
import { Route, Router, Routes} from "react-router-dom";
import Profile from "./profile";
import Transaction from "./transaction";
import accSummary from "./accSummary";
function Dashboard(){
    
    return (
        <>
       <Header/>
       {/* <Router>
        <Routes>
            <Route path="/dashboard" exact Component={<Profile/>}></Route>
            <Route path="/transaction" exact Component={<Transaction/>}></Route>
            <Route path="/accSummary" exact Component={<accSummary/>}></Route>
            <Route path="/" exact Component={}></Route>
            <Route path="/" exact Component={}></Route>
            <Route path="/" exact Component={}></Route>
        </Routes>
       </Router> */}

        
    
       </>
    );
}

export default Dashboard;
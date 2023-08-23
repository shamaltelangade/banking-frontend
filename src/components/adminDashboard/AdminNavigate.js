import React from "react";
import { NavLink } from 'react-router-dom';
import "./navigate.css"
const AdminNavigate = () =>{
    
    const menuItem=[
        {
            path:"/allUsers",
            name:"All Users "
        },
        {
            path:"/pendingRequest",
            name:"Pendig Request"
        },
        {
            path:"/adminTransaction",
            name:"Transaction"
        }
       
    ]
    return (
        <div className="ccontainer">
        <div style={{width: "200px"}} className="sidebar">
            <div className="top_section">
                <h1  className="logo">Bank</h1>
                
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon"></div>
                        <div style={{display: "block" }} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>

     </div>
    );
};
export default AdminNavigate;
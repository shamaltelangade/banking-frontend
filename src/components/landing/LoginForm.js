import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import AuthForm from './AuthForm';
import './Login.css';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../utils/UserContext';
import axios from 'axios';


const LoginForm = () => {
    const [activeTab, setActiveTab] = useState('user-login');
    const baseURL = "http://localhost:8080/login";

    const navigate = useNavigate();

    const { login } = useAuth();

    const [error, setError] = useState('');

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const handleAuthSubmit = (userData) => {
        console.log(`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}:`, userData);
        // Handle authentication logic here
        console.log(activeTab === 'admin-login');
        axios.post(baseURL, {
            username: userData.username,
            password: userData.password,
            admin: activeTab === 'admin-login'
        })
            .then((response) => {
                if (response) {
                    console.log(response.data, response.status);
                    if (response.status === 200) {
                        if(response.data == true || response.data == "true") {
                            login(userData.username, true);
                            navigate('/admin');
                        }
                        else {
                            login(userData.username, false);
                            navigate('/dashboard');
                        }
                    }
                    else {
                        setError('Unknown error occurred, please try again!');
                    }
                }
                else {
                    setError('Unknown error occurred, please try again!');
                }
            })
            .catch((err) => {
                console.log(err.response.data);
                if (err.response != null) {
                    setError('Error: ' + err.response.data);
                }
                else {
                    setError('Unknown error occurred, please try again!');
                }
            });
    };

    return (

        <div className="sec">
            <div className="fbox">
                <div className="f-value">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === 'user-login' })}
                                onClick={() => toggleTab('user-login')}
                            >
                                User Login
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === 'admin-login' })}
                                onClick={() => toggleTab('admin-login')}
                            >
                                Admin Login
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="user-login">
                            <AuthForm isLogin={true} onSubmit={handleAuthSubmit} error={error} />
                        </TabPane>
                        <TabPane tabId="admin-login">
                            <AuthForm isLogin={false} onSubmit={handleAuthSubmit} error={error} />
                        </TabPane>
                    </TabContent>

                </div></div>
        </div >


    );
};

export default LoginForm;
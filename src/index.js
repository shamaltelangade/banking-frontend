import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './landingpage';
import Register from './components/register';
import Login from './components/login';
import Dashboard from './components/dashboard'
import Account from './components/Account';
import Transaction from './components/transaction';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App/>} ></Route>
      <Route path ="/dashboard" element={<Dashboard/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/account" element={<Account/>} />
      <Route path ="/Transaction" element={<Transaction/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

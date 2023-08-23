import {Routes,Route, BrowserRouter} from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import Login from './components/landing/Login';
import Register from './components/Register';
import Dashboard from './components/dashboard/Dashboard';
import AccSummary from './components/dashboard/AccSummary';
import TransactionForm from './components/TransactionForm';
import Withdrawl from './components/Withdrawl';
import SelfTransfer from './components/SelfTransfer';
import AdminHome from './components/admin/AdminHome';
import AdminLogin from './components/adminDashboard/AdminLogin';
import AdminNavigate from './components/adminDashboard/AdminNavigate';

import AccountStatement from './components/AccountStatement';
import OnlineBankingRegister from './components/OnlineBankingRegister'
import Profile  from './components/dashboard/Profile';
import AllUsers from './components/dashboard/AllUsers';
import ViewProfile from './components/dashboard/ViewProfile';

function App() {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LandingPage />} ></Route>
    <Route path='/viewprofile' element={<ViewProfile/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/login" element={<Register />}/>

      <Route path="/Profile" element={<Profile />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/adminlogin" element={<AdminLogin />}/>
      <Route path="/adminNavigate" element={<AdminNavigate />}/>

      <Route path ="/dashboard" element={<Dashboard />}/>
      <Route path ="/accSummary" element={<AccSummary/>}/>

      <Route path ="/admin" element={<AdminHome />}/>
      <Route path ="/AccountStatement" element={<AccountStatement/>}/>
      <Route path ="/Acc" element={<OnlineBankingRegister/>}/>
      <Route path ="/AllUsers" element={<AllUsers/>}/>
      
      <Route path="/onlineTransfer" element={<TransactionForm/>}/>
      <Route path="/selfTransfer" element={<SelfTransfer/>}/>
      <Route path="/cashWithdrawl" element={<Withdrawl/>}/>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
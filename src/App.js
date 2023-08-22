import {Routes,Route, BrowserRouter} from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import Login from './components/landing/Login';
import Register from './components/Register';
import Dashboard from './components/dashboard/Dashboard';
import AccSummary from './components/dashboard/AccSummary';
import TransactionForm from './components/TransactionForm';
import Withdrawl from './components/Withdrawl';
import SelfTransfer from './components/SelfTransfer';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LandingPage />} ></Route>

      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>

      <Route path ="/dashboard" element={<Dashboard />}/>
      <Route path ="/accSummary" element={<AccSummary/>}/>
      
      <Route path="/onlineTransfer" element={<TransactionForm/>}/>
      <Route path="/selfTransfer" element={<SelfTransfer/>}/>
      <Route path="/cashWithdrawl" element={<Withdrawl/>}/>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import Login from './components/landing/Login';
import Register from './components/landing/Register';
import Dashboard from './components/dashboard/Dashboard';
import AccSummary from './components/dashboard/AccSummary';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LandingPage />} ></Route>

      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>

      <Route path ="/dashboard" element={<Dashboard />}/>
      <Route path ="/accSummary" element={<AccSummary/>}/>
      
      
      {/* <Route path="/account" element={<Account/>} />
      <Route path ="/Transaction" element={<Transaction/>}/> */}
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
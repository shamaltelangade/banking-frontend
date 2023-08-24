import React from 'react';
import { UserProvider, useAuth } from './utils/UserContext';
import { BrowserRouter as Router, Route, Navigate, Routes, Outlet } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import Login from './components/landing/Login';
import Register from './components/landing/Register';
import Dashboard from './components/dashboard/Dashboard';
import AccSummary from './components/dashboard/AccSummary';
import TransactionForm from './components/dashboard/TransactionForm';
import Withdrawl from './components/dashboard/Withdrawl';
import SelfTransfer from './components/dashboard/SelfTransfer';
import AdminHome from './components/admin/AdminHome';
import AdminTransaction from './components/admin/AdminTransactions';
import PageNotFound from './components/PageNotFound';
import ProfilePage from './components/dashboard/Profile';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>

        <Route path="/" exact element={<PublicRoute />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="/" exact element={<AdminRoute />}>
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/adminTransactions" element={<AdminTransaction />} />
          </Route>

          <Route path="/" exact element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/accSummary" element={<AccSummary />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/onlineTransfer" element={<TransactionForm />} />
            <Route path="/selfTransfer" element={<SelfTransfer />} />
            <Route path="/cashWithdrawl" element={<Withdrawl />} />
          </Route>

          
          


          {/* Catch-all route for Not Found */}
          <Route path="*" element={<PageNotFound />}/>

    
        </Routes>
      </Router>
    </UserProvider>
  );
}

function PrivateRoute({ element }) {
  const { authenticated, admin } = useAuth();

  return authenticated ? admin ? <Navigate to="/admin" /> : <Outlet /> : <Navigate to="/" />;
}

function PublicRoute({ element }) {
  const { authenticated, admin } = useAuth();

  return authenticated ? admin ? <Navigate to="/admin" /> : <Navigate to="/dashboard" /> : <Outlet />;
}

function AdminRoute({ element }) {
  const { authenticated, admin } = useAuth();
  return authenticated && admin ? <Outlet /> : <Navigate to="/" />;

}

export default App;
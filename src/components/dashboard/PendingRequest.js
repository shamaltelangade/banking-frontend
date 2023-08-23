import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './AllUsers.css'
import axios from "axios";
const PendingRequest = () =>{
    const [users, setUsers] = useState([]);

    useEffect(() => {
      // Fetch user list from API
      axios.get('API_URL/users')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => console.error('Error fetching users:', error));
    }, []);
  
  return (
    <div className="admin-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
            <th>Profile Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              
              <td>
                <Link to={`/user/${user.id}`}>View Profile</Link>
              </td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default PendingRequest;
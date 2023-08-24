import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(sessionStorage.getItem("uname") != null);
  const [admin, setAdmin] = useState(sessionStorage.getItem("admin") == "true");

  const login = (username, admin) => {
    sessionStorage.setItem("uname", username);
    sessionStorage.setItem("admin", admin);
    if(admin) {
        setAdmin(true);
    }
    setAuthenticated(true);
  };

  const logout = (admin) => {
    sessionStorage.removeItem("uname");
    if(admin) {
        sessionStorage.removeItem("admin");
    }
    setAuthenticated(false);
    setAdmin(false);
  };

  return (
    <UserContext.Provider value={{ authenticated, admin,  login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useAuth() {
  return useContext(UserContext);
}
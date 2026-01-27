 "use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Default as null for SSR
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== "undefined") {
      const username = localStorage.getItem("username");
      if (username === "hr@webkorps.com") {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false); // Set loading to false after checking
    }
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
    setIsAuthenticated(false);
  };



  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

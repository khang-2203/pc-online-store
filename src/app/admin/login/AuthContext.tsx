"use client";

import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  setAuthenticated: (val: boolean) => void;
};

const AdminAuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setAuthenticated: () => {},
});

export const AdminAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, setAuthenticated: setIsAuthenticated }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);

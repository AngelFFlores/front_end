import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useuth debe usarse dentro de un AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(true)

  const sigNin = () => {
    setAuthenticated(true)
  }

  const logOut = () => {
    setAuthenticated(false)
  }


  return (
    <AuthContext.Provider value={{ isAuthenticated, sigNin, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}
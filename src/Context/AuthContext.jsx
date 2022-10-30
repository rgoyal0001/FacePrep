import React, { createContext } from "react";

export const AuthContext = createContext();
// import { useNavigate } from "react-router-dom";
export const AuthProvider = ({ children }) => {
  const [isAuth,setISAuth]=React.useState(false)

 const handleAuth=()=>{
   setISAuth(!isAuth)
 }
 
  return <AuthContext.Provider  value={{handleAuth,isAuth}} >{children}</AuthContext.Provider>;
};
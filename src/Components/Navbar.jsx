import React from "react";
import { AuthContext } from "../Context/AuthContext";
import {Link} from "react-router-dom"

export const Navbar = () => {
  const {isAuth,handleAuth} =React.useContext(AuthContext);
  // const handleClick=()=>{
  //   handleAuth()

  // }
  return <div style={{display:"flex" ,justifyContent:"space-around"}}>
       {/* {
        isAuth? <Link to="/home">Home</Link> : <p>Home</p>
       } */}
       {
        isAuth? <Link to='/'><button onClick={handleAuth}>Logout</button></Link>:<p> Login  </p>
       }
     
  </div>;
};
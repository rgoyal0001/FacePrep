import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import "./users.css";
export const Navbar = () => {
  const { isAuth, handleAuth } = React.useContext(AuthContext);
  // console.log("auth at nav", isAuth);
  return (
    <div id="navbar">
      <Link to="/home" style={{ textDecoration: "none" }}>
        <button>Home</button>
      </Link>

      {isAuth ? (
        <Link to="/">
          <button onClick={handleAuth}>Logout</button>
        </Link>
      ) : (
        <Link to="/">
          <button> Login </button>{" "}
        </Link>
      )}
    </div>
  );
};

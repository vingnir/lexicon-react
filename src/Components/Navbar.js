import React from "react";
import { useNavigate } from "react-router-dom";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { useIsAuthenticated } from "@azure/msal-react";
import "./Navbar.css";

function Navbar() {
  let navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  return (
    <div className="navbar">
      <ul className="nav">
        <li className="nav-item">
          <a 
            className="nav-link active"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => {
              navigate("/people");
            }}
          >
            People
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            {isAuthenticated ? <SignOutButton /> : <SignInButton />}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

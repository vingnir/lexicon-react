import React from "react";
import { useNavigate } from "react-router-dom";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { useIsAuthenticated } from "@azure/msal-react";
import "./Navbar.css";
import { AuthenticatedTemplate } from "@azure/msal-react";
// import {
//   AuthenticatedTemplate,
//   // UnauthenticatedTemplate,
//   // useMsal,
// } from "@azure/msal-react";
import ProfileContent from "../ProfileContent"; 

function Navbar() {
  let navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  return (
    <div className="navbar">
      <ul className="nav">
        <li>
          <a className="nav-link" href="#">
            <AuthenticatedTemplate>
              <ProfileContent />
            </AuthenticatedTemplate>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            {isAuthenticated ? <SignOutButton /> : <SignInButton />}
          </a>
        </li>
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
      </ul>
    </div>
  );
}

export default Navbar;

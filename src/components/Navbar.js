import React from "react";
import "./Navbar.css";
import Logo from "../img/Logo3-03.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-md ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo_Elev5" id="logo" />
        </Link>

        <div className="signing">
          <Link to="Login">
            <i className="fa-solid fa-circle-user d-block"></i>دخول
          </Link>
          <Link to="Signup">
            <i className="fa-solid fa-pen-to-square d-block"></i>
            تسجيل
          </Link>
        </div>
      </div>
    </div>
  );
}

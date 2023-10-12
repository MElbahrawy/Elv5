import React from "react";
import "./Navbar.css";
import Logo from "../img/Logo3-03.png";

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-md ">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Logo_Elev5" id="logo" />
        </a>

        <div className="signing">
          <a href="/">
            <i className="fa-solid fa-circle-user d-block"></i>دخول
          </a>
          <a href="/">
            <i className="fa-solid fa-pen-to-square d-block"></i>
            تسجيل
          </a>
        </div>
      </div>
    </div>
  );
}

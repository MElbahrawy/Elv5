import React from "react";
import { Link } from "react-router-dom";

export default function NavbarBtns() {
  return (
    <div className="signing">
      <Link to="Login">
        <i className="fa-solid fa-circle-user d-block"></i>دخول
      </Link>
      <Link to="sign-up">
        <i className="fa-solid fa-pen-to-square d-block"></i>
        تسجيل
      </Link>
    </div>
  );
}

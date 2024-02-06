import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../img/Logo3-03.png";
import { Link } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";
import { Container } from "react-bootstrap";
import { user } from "../../Data/user";
import NavbarBtns from "./NavbarBtns";

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-md ">
      <Container className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo_Elev5" id="logo" />
        </Link>
        {localStorage.token ? <NavbarDropdown /> : <NavbarBtns />}
      </Container>
    </div>
  );
}

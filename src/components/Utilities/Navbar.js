import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../img/Logo3-03.png";
import { Link } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";
import { Container } from "react-bootstrap";
import NavbarBtns from "./NavbarBtns";

export default function Navbar() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [localStorage.token]);
  return (
    <div className="navbar navbar-expand-md ">
      <Container className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo_Elev5" id="logo" />
        </Link>
        {token ? <NavbarDropdown /> : <NavbarBtns />}
      </Container>
    </div>
  );
}

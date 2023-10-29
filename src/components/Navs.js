import React, { useState } from "react";
import "./Navs.css";
import { Link } from "react-router-dom";
export default function Navs() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <nav className="navbar navbar-expand-md ">
      <div className="container">
        <button
          className="btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className={isActive ? "tabs active" : "tabs"}
            onClick={toggleClass}
          >
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </button>
        <div className="collapse ms-auto navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Companies">
                الشركات
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technicians">
                الفنيين
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

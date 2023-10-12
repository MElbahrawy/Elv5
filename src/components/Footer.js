import React from "react";
import "./Footer.css";
import Logo from "../img/Logo-02.png";

export default function Footer() {
  return (
    <footer className="">
      <div className="container">
        <div className="row">
          <div className="Who-are-we col-lg-3 col-md-6 col-sm-12">
            <a href="/" className="logo">
              <img src={Logo} alt="" />
            </a>
            <p>
              هي شركة مصرية تأسست في عام 2023 متخصصه في المصاعد الذكية في مصر
            </p>
          </div>
          <div className="info col-lg-3 col-md-6 col-sm-12">
            <h4>معلومات</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}

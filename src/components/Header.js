import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="head">
      <div className="container">
        <div className="navs">
          <Link to="/">الرئيسية</Link>
          <Link to="/">تواصل معنا</Link>
          <Link to="/">عن الشركة</Link>
        </div>
      </div>
    </div>
  );
}

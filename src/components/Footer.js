import React from "react";
import "./Footer.css";
import Logo from "../img/Logo-02.png";
import FooterCopyright from "./FooterCopyright";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="">
      <div className="container">
        <div className="row">
          <div className="Who-are-we footer-col col-lg-3 col-md-6 col-sm-12">
            <Link to="/" className="logo">
              <img src={Logo} alt="" />
            </Link>
            <p>
              هي شركة مصرية تأسست في عام 2023 متخصصه في المصاعد الذكية في مصر
            </p>
          </div>
          <div className="info footer-col col-lg-3 col-md-6 col-sm-12">
            <h4>معلومات</h4>
            <Link to="/">عن الشركة</Link>
            <Link to="/">الشروط والأحكام</Link>
            <Link to="/">سياسة الخصوصية</Link>
          </div>
          <div className="customer-service footer-col col-lg-3 col-md-6 col-sm-12">
            <h4>خدمات العملاء</h4>
            <Link to="/">اتصل بنا</Link>
            <Link to="/">خريطة الموقع</Link>
            <Link to="/">سياسة الخصوصية</Link>
          </div>
          <div className="social footer-col col-lg-3 col-md-6 col-sm-12">
            <h4>وسائل التواصل</h4>
            <Link to="/">
              <i class="fa-brands fa-facebook-f"></i>فيس بوك
            </Link>
            <Link to="/">
              <i class="fa-brands fa-instagram"></i>انستاجرام
            </Link>
            <Link to="/">
              <i class="fa-brands fa-x-twitter"></i>اكس
            </Link>
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
}

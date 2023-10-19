import React from "react";
import "./Footer.css";
import Logo from "../img/Logo-02.png";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    <footer className="">
      <div className="container">
        <div className="row">
          <div className="Who-are-we footer-col col-lg-3 col-md-6 col-sm-12">
            <a href="/" className="logo">
              <img src={Logo} alt="" />
            </a>
            <p>
              هي شركة مصرية تأسست في عام 2023 متخصصه في المصاعد الذكية في مصر
            </p>
          </div>
          <div className="info footer-col col-lg-3 col-md-6 col-sm-12">
            <h4>معلومات</h4>
            <a href="/">عن الشركة</a>
            <a href="/">الشروط والأحكام</a>
            <a href="/">سياسة الخصوصية</a>
          </div>
          <div className="customer-service footer-col col-lg-3 col-md-6 col-sm-12">
            <h4>خدمات العملاء</h4>
            <a href="/">اتصل بنا</a>
            <a href="/">خريطة الموقع</a>
            <a href="/">سياسة الخصوصية</a>
          </div>
          <div className="social footer-col col-lg-3 col-md-6 col-sm-12">
            <h4>وسائل التواصل</h4>
            <a href="/">
              <i class="fa-brands fa-facebook-f"></i>فيس بوك
            </a>
            <a href="/">
              <i class="fa-brands fa-instagram"></i>انستاجرام
            </a>
            <a href="/">
              <i class="fa-brands fa-x-twitter"></i>اكس
            </a>
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
}

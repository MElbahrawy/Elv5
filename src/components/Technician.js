import React, { useEffect, useState } from "react";
import "./Technician.css";
export default function Technician(props) {
  return (
    <div className="technician-card col-lg-5 col-md-12">
      <div className="avatar-holder">
        <img src="https://avatar.iran.liara.run/public/boy" alt="avatar" />
      </div>
      <div className="tech-info">
        <h2 className="tech-name">محمد البحراوي</h2>
        <p className="tech-location">بنها ، القليوبية</p>
      </div>
      <div className="tech-contact">
        <a
          href="tel:201151245412"
          className="phone"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-phone-volume"></i>اتصل الان
        </a>
        <a
          href="https://wa.me/201151245412"
          className="whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-whatsapp"></i>واتس اب
        </a>
      </div>
    </div>
  );
}

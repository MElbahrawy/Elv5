import React from "react";
import "./PhoneBtn.css";

export default function WhatsappBtn(props) {
  const { phone } = props;
  return (
    <a href={`tel:${phone}`} className="phone" target="_blank" rel="noreferrer">
      <i className="fa-solid fa-phone-volume"></i>اتصل الان
    </a>
  );
}

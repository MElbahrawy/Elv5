import React from "react";
import "./WhatsappBtn.css";

export default function WhatsappBtn(props) {
  const { phone } = props;
  return (
    <a
      href={`https://wa.me/${phone}`}
      className="whatsapp"
      target="_blank"
      rel="noreferrer"
    >
      <i className="fa-brands fa-whatsapp"></i>واتس اب
    </a>
  );
}

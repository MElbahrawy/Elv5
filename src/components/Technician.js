import React, { useEffect, useState } from "react";
import "./Technician.css";
import WhatsappBtn from "./WhatsappBtn";
import PhoneBtn from "./PhoneBtn";
export default function Technician(props) {
  const { name, city, gov } = props;
  return (
    <div className="technician-card col-lg-5 col-md-12">
      <div className="avatar-holder">
        <img
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          alt="avatar"
        />
      </div>
      <div className="tech-info">
        <h2 className="tech-name">{name}</h2>
        <p className="tech-location">
          {city} ، {gov}
        </p>
      </div>
      <div className="tech-contact">
        <PhoneBtn phone="01151245412" />
        <WhatsappBtn phone="01151245412" />
      </div>
    </div>
  );
}

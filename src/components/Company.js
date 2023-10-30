import React from "react";
import "./Company.css";
export default function Company(props) {
  const { title, description, location, logo, phone, email, website } = props;

  return (
    <div className="company-card">
      <div className="company-body">
        <div className="logo-holder">
          <img src={logo} alt="" />
        </div>
        <div className="company-details">
          <h2 className="company-title">{title}</h2>
          <div className="company-description">
            <span>عن الشركه :</span>
            {description}
          </div>
          <div className="company-location">
            <i class="fa-solid fa-location-dot"></i> {location}
          </div>
        </div>
      </div>
      <div className="company-contact">
        <a
          href={`tel:${phone}`}
          className="phone"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-solid fa-phone-volume"></i>
          <span>اتصل بنا</span>
        </a>
        <a
          href={`https://wa.me/${phone}`}
          className="whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-whatsapp"></i> <span>واتس اب</span>
        </a>
        <a href={`mailto: ${email}`}>
          <i class="fa-regular fa-envelope"></i> <span>البريد الالكتروني</span>
        </a>
        <a href={website}>
          <i class="fa-solid fa-earth-africa"></i>
          <span>الموقع الالكتروني</span>
        </a>
      </div>
    </div>
  );
}

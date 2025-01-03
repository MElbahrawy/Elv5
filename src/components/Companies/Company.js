import React from "react";
import "./Company.css";

export default function Company({
  title,
  description,
  location,
  logo,
  phone,
  email,
  website,
}) {
  return (
    <div className="company-card">
      <div className="company-body">
        <div className="logo-holder">
          <img src={`data:image/jpeg;base64,${logo}`} alt="companyLogo" />
        </div>
        <div className="company-details">
          <h2 className="company-title">{title}</h2>
          <div className="company-description">
            <span>عن الشركه :</span>
            {description}
          </div>
          <div className="company-location">
            <i className="fa-solid fa-location-dot"></i> {location}
          </div>
        </div>
      </div>
      <div className="company-contact">
        <a
          href={`tel:${phone}`}
          className="company-phone"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-solid fa-phone-volume"></i>
          <span>اتصل بنا</span>
        </a>
        <a
          href={`https://wa.me/${phone}`}
          className="company-whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-whatsapp"></i> <span>واتس اب</span>
        </a>
        <a href={`mailto: ${email}`}>
          <i className="fa-regular fa-envelope"></i>{" "}
          <span>البريد الالكتروني</span>
        </a>
        <a href={website}>
          <i className="fa-solid fa-earth-africa"></i>
          <span>الموقع الالكتروني</span>
        </a>
      </div>
    </div>
  );
}

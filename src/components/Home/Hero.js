import React, { useEffect, useState } from "react";
import "./Hero.css";
import Logo from "../../img/Logo3-03.png";
import { Link } from "react-router-dom";
import intro from "../../img/Intro.mp4";
export default function Heading() {
  return (
    <section id="hero-section">
      <div className="img-holder">
        <video autoPlay muted loop playsInline>
          <source src={intro} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-heading ">
        <span className="transparent-Background"></span>
        <div className="hero-details">
          <img src={Logo} alt="" className="center" />
          <p>
            طريقك الي جيل جديد من المصاعد الذكية <br />
            الآن من مكان واحد تستطيع الحصول على كل ما يخص المصاعد في مصر
          </p>
          <Link to="/" className="google-play">
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google play"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

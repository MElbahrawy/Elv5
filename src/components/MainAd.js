import React from "react";
import "./MainAd.css";

export default function MainAd() {
  return (
    <section id="main-ad">
      <div className="container">
        <div className="row">
          <div className="img-holder col-6"></div>
          <div className="ad-details col-6">
            <h2 className="main-ad-title">
              أحصل علي خصم يصل حتي 35% الان بمناسبة عروض الجمعة البيضاء
            </h2>
            <p className="main-ad-desc">
              للمزيد من المعلومات يرجي زيارة موقعنا
            </p>
            <a href="/" className="main-ad-website">
              {" "}
              <i className="fa-regular fa-share-from-square"></i>
              موقعنا الالكتروني
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

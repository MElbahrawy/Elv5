import React from "react";
import "./Slider.css";

export default function Slider() {
  return (
    <div className="container slider">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.otis.com/documents/d/otis-2/gen3-refresh-new"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>تحكم في مصعدك </h5>
              <p>
                يمكن التحكم في مصعدك الذكي من خلال هاتفك المحمول بسهولة لتوفير
                العناء
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1547630824-eed1be6a27b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxldmF0b3J8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>ابلاغ مباشر بالاعطال</h5>
              <p>
                كن علي دراية كامله باعطال المصعد ومشاكل المصعد ليتم حلها فورا
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://wallpapers.com/images/hd/elevator-pictures-1600-x-1024-5qv7u6f0d3xl5t6z.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>تواصل فوري مع الجميع</h5>
              <p>
                تواصل مع الجميع بسهوله وبسرعه لحل المشاكل والحفاظ علي سلامتك
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

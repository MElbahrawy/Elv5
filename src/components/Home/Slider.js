import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../img/slide1.jpg";
import slide2 from "../../img/slide2.webp";
import slide3 from "../../img/slide3.jpg";
import "./Slider.css";

export default function Slider() {
  return (
    <Carousel className="slider" fade>
      <Carousel.Item>
        <img src={slide1} className="d-block w-100" alt="..." />
        <Carousel.Caption>
          <h3>تحكم في مصعدك</h3>
          <p>
            يمكن التحكم في مصعدك الذكي من خلال هاتفك المحمول بسهولة لتوفير
            العناء
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide2} className="d-block w-100" alt="..." />
        <Carousel.Caption>
          <h3>ابلاغ مباشر بالاعطال</h3>
          <p>كن علي دراية كامله باعطال المصعد ومشاكل المصعد ليتم حلها فورا</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide3} className="d-block w-100" alt="..." />
        <Carousel.Caption>
          <h3>تواصل فوري مع الجميع</h3>
          <p>تواصل مع الجميع بسهوله وبسرعه لحل المشاكل والحفاظ علي سلامتك</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

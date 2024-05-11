import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SecondaryAdv.css";
import pic1 from "../../img/ad1.jpg";
import pic2 from "../../img/ad2.jpg";
import pic3 from "../../img/ad3.jpg";

export default function SecondaryAdv() {
  return (
    <section id="sec-adv" className="p-1">
      <Container>
        <Row className="justify-content-center gap-3">
          <Col className="right-ad p-0" md="4">
            <div className="adv-card ">
              <img src={pic1} alt="img_placeholder" />
              <span className="p-1">أحصل علي المزيد من العروض</span>
            </div>
          </Col>
          <Col className="left-ad p-0 d-flex flex-column gap-3" md="4">
            <div className="adv-card h-50">
              <img src={pic2} alt="img_placeholder" />
              <span className="p-1">أحصل علي المزيد من العروض </span>
            </div>
            <div className="adv-card h-50">
              <img src={pic3} alt="img_placeholder" />
              <span className="p-1">أحصل علي المزيد من العروض</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

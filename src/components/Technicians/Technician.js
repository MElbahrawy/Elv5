import WhatsappBtn from "../Utilities/WhatsappBtn";
import PhoneBtn from "../Utilities/PhoneBtn";
import { Col, Row } from "react-bootstrap";
import React from "react";
import "./Technician.css";
export default function Technician({ name, address }) {
  return (
    <Col lg="5" className="technician-card">
      <div className="avatar-holder">
        <img
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          alt="avatar"
        />
      </div>
      <Row className="tech-info">
        <Col sm="6">
          <h2 className="tech-name">{name}</h2>
        </Col>
        <Col sm="6">
          <p className="tech-location">{address}</p>
        </Col>
      </Row>
      <div className="tech-contact">
        <PhoneBtn phone="01151245412" />
        <WhatsappBtn phone="01151245412" />
      </div>
    </Col>
  );
}

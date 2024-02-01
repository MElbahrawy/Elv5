import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactImg from "../../components/ContactUs/ContactImg";
import ContactForm from "../../components/ContactUs/ContactForm";

export default function ContactPage() {
  return (
    <div className="m-5 ">
      <Container>
        <Row className="bg-light ">
          <Col sm="6" className="p-0">
            <ContactImg />
          </Col>
          <Col sm="6" className="p-0">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

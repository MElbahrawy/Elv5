import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddElevator from "../../components/Crud/AddElevator";
import CrudCat from "../../components/Crud/CrudCat";

export default function ElevatorCrudPage() {
  return (
    <Container className="my-4 align-items-end d-flex flex-column">
      <Row className="w-100">
        <Col sm="2">
          <CrudCat />
        </Col>
        <Col sm="10">
          <AddElevator />
        </Col>
      </Row>
    </Container>
  );
}

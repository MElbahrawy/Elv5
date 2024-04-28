import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CompaniesCrud from "../../components/Crud/CompaniesCrud";
import CrudCat from "../../components/Crud/CrudCat";
import AddNewBtn from "../../components/Crud/AddNewBtn";

export default function AdminPage() {
  return (
    <Container className="my-4 align-items-end d-flex flex-column">
      <AddNewBtn type="company" />
      <Row className="w-100">
        <Col sm="2">
          <CrudCat />
        </Col>
        <Col sm="10">
          <CompaniesCrud />
        </Col>
      </Row>
    </Container>
  );
}

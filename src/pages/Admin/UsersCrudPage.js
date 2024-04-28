import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UsersCrud from "../../components/Crud/UsersCrud";
import CrudCat from "../../components/Crud/CrudCat";
import AddNewBtn from "../../components/Crud/AddNewBtn";

export default function AdminPage() {
  return (
    <Container className="my-4 align-items-end d-flex flex-column">
      <AddNewBtn type="user" />
      <Row className="w-100">
        <Col md="2">
          <CrudCat />
        </Col>
        <Col md="10">
          <UsersCrud />
        </Col>
      </Row>
    </Container>
  );
}

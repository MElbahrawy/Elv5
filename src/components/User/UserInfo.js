import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function UserPage() {
  return (
    <div className="my-5">
      <Container>
        <Form>
          <Row>
            <Col md="2">
              <Form.Group
                className="mb-3"
              >
                <Form.Label>الرقم التعريفي</Form.Label>
                <Form.Control type="text" value="13678" disabled />
              </Form.Group>
              </Col>
              <Col md="2">
              <Form.Group
                className="mb-3"
              >
                <Form.Label>الاسم الاول</Form.Label>
                <Form.Control type="text" value="" />
              </Form.Group>
              </Col>
              <Col md="2">
              <Form.Group
                className="mb-3"
              >
                <Form.Label>الاسم الاخير</Form.Label>
                <Form.Control type="text" value="" />
              </Form.Group>
              </Col>
          </Row>
          <Row>
          <Col md="4">
              <Form.Group
                className="mb-3"
                
              >
                <Form.Label>العنوان</Form.Label>
                <Form.Control type="text" value="" />
              </Form.Group>
              </Col>
              <Col md="3">
              <Form.Group
                className="mb-3"
                
              >
                <Form.Label>الرقم الاول</Form.Label>
                <Form.Control type="text" value="" />
              </Form.Group>
              </Col>
              <Col md="3">
              <Form.Group
                className="mb-3"
                
              >
                <Form.Label>الرقم الثاني (اختياري)</Form.Label>
                <Form.Control type="text" value="" />
              </Form.Group>
              </Col>
          </Row>
          <Row>
            <Col md="4">
              <Form.Group
                className="mb-3"
              >
                <Form.Label>البريد الالكتروني</Form.Label>
                <Form.Control type="text" value="" />
              </Form.Group>
              </Col>
              <Col md="4" >
              <Form.Group
                className="mb-3"
                
              >
                <Form.Label>الرقم السري</Form.Label>
                <Form.Control type="text" value="" />
              </Form.Group>
              </Col>
          </Row>
          <Button variant="success">حفظ التغييرات</Button>
          <Link to={localStorage.type === "admin" ? "/admin/users" : "/"} className="mx-2"><Button variant="danger">عودة</Button></Link>
        </Form>
      </Container>
    </div>
  );
}

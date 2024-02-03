import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { user } from "../../Data/user";

export default function UserPage() {
  const [firstName, setfirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [address, setaddress] = useState(user.address);
  const [phoneNumber, setphoneNumber] = useState(user.phoneNumber);
  const [secondNumber, setsecondNumber] = useState(user.secondNumber);
  const [email, setemail] = useState(user.email);
  return (
    <div className="my-5">
      <Container>
        <Form>
          <Row>
            <Col md="2">
              <Form.Group className="mb-3">
                <Form.Label>الرقم التعريفي</Form.Label>
                <Form.Control type="text" value={user.id} disabled />
              </Form.Group>
            </Col>
            <Col md="2">
              <Form.Group className="mb-3">
                <Form.Label>الاسم الاول</Form.Label>
                <Form.Control
                  type="text"
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md="2">
              <Form.Group className="mb-3">
                <Form.Label>الاسم الاخير</Form.Label>
                <Form.Control
                  type="text"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Form.Group className="mb-3">
                <Form.Label>العنوان</Form.Label>
                <Form.Control
                  type="text"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md="3">
              <Form.Group className="mb-3">
                <Form.Label>الرقم الاول</Form.Label>
                <Form.Control
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setphoneNumber(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md="3">
              <Form.Group className="mb-3">
                <Form.Label>الرقم الثاني (اختياري)</Form.Label>
                <Form.Control
                  type="text"
                  value={secondNumber}
                  onChange={(e) => setsecondNumber(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Form.Group className="mb-3">
                <Form.Label>البريد الالكتروني</Form.Label>
                <Form.Control
                  type="text"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md="4">
              <Form.Group className="mb-3">
                <Form.Label>الرقم السري</Form.Label>
                <Form.Control type="text" value="" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="success">حفظ التغييرات</Button>
          <Link to=".." relative="path" className="mx-2">
            <Button variant="danger">عودة</Button>
          </Link>
        </Form>
      </Container>
    </div>
  );
}

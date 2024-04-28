import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function EditCompanyForm() {
  let { companyId } = useParams();
  const [title, setTitle] = useState("لا توجد بيانات حاليا");
  const [description, setDescription] = useState("لا توجد بيانات حاليا");
  const [address, setAddress] = useState("لا توجد بيانات حاليا");
  const [website, setWebsite] = useState("لا توجد بيانات حاليا");
  const [email, setEmail] = useState("لا توجد بيانات حاليا");
  const [phoneNumber, setPhoneNumber] = useState("لا توجد بيانات حاليا");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/companies/${companyId}`)
      .then((res) => res.data)
      .then((company) => {
        setTitle(company.title);
        setDescription(company.description);
        setAddress(company.location);
        setWebsite(company.website);
        setEmail(company.email);
        setPhoneNumber(company.phoneNumber);
      })
      .catch(() => {
        console.error("static data");
      });
  }, []);
  return (
    <div className="my-5">
      <Container>
        <Form>
          <div className="mb-4 h2">بيانات الشركة</div>
          <Row>
            {/* title */}
            <Col md="4">
              <Form.Group className="mb-3">
                <Form.Label>اسم الشركه</Form.Label>
                <Form.Control type="text" value={title} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {/* description */}
            <Col md="10">
              <Form.Group className="mb-3">
                <Form.Label>الوصف</Form.Label>
                <Form.Control as="textarea" rows={5} value={description} />
              </Form.Group>
            </Col>
          </Row>
          {/* address */}
          <Col md="6">
            <Form.Group className="mb-3">
              <Form.Label>العنوان</Form.Label>
              <Form.Control type="text" value={address} />
            </Form.Group>
          </Col>
          <hr />
          <div className="mb-4 h2">بيانات التواصل</div>
          <Row>
            {/* website */}
            <Col md="4">
              <Form.Group className="mb-3">
                <Form.Label>الموقع الالكتروني</Form.Label>
                <Form.Control type="text" value={website} />
              </Form.Group>
            </Col>
            {/* email */}
            <Col md="4">
              <Form.Group className="mb-3">
                <Form.Label>البريد الالكتروني</Form.Label>
                <Form.Control type="text" value={email} />
              </Form.Group>
            </Col>
            {/* phoneNumber */}
            <Col md="4">
              <Form.Group className="mb-3">
                <Form.Label>رقم الهاتف</Form.Label>
                <Form.Control type="text" value={phoneNumber} />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="success" type="submit">
            حفظ التغييرات
          </Button>
          <Link to=".." relative="path" className="mx-2">
            <Button variant="danger">عودة</Button>
          </Link>
        </Form>
      </Container>
      <ToastContainer />
    </div>
  );
}

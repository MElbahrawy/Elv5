import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-light d-flex align-items-center p-3 flex-column">
      <h2 className="my-5">تريد التواصل معنا ؟</h2>
      <Form className="w-100">
        <Form.Group className="mb-3">
          <Form.Label>ادخل بريدك الالكتروني</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>اكتب لنا</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="اكتب هنا ..." />
        </Form.Group>
        <Button className="bg-main">أرسل</Button>
      </Form>
    </div>
  );
}

import React, { useEffect } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import Avatar from "../../img/Avatar.webp";
import axios from "axios";

export default function ShowInfoCrud(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="avatar-holder d-inline">
            <img src={Avatar} alt="avatar" />
          </div>
          <h3 className="d-inline mx-2">
            {props.user.firstName} {props.user.lastName}
          </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <h4>الرقم التعريفي</h4>
            <p>{props.user.id}</p>
          </Col>
          <Col>
            <h4>نوع الحساب</h4>
            <p>{props.user.type}</p>
          </Col>
          <Col>
            <h4>العنوان</h4>
            <p>{props.user.address}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>رقم الهاتف</h4>
            <p>{props.user.phoneNumber}</p>
          </Col>
          <Col>
            <h4>الرقم الثاني</h4>
            <p>{props.user.secondNumber}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>البريد الالكتروني</h4>
            <p>{props.user.email}</p>
          </Col>
          <Col>
            <h4>الرقم السري</h4>
            <p>{props.user.password}</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

import React, { useEffect } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import Avatar from "../../img/Avatar.webp";

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
          <div className=" d-inline">
            <img
              src={props.type === "users" ? Avatar : props.user.accountImage}
              alt="avatar"
            />
          </div>
          <h3 className="d-inline mx-2">
            {props.type === "users"
              ? props.user.accountFName + " " + props.user.accountLName
              : props.user.title}
          </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.type === "users" ? (
          <Row>
            <Col>
              <h4>الرقم التعريفي</h4>
              <p>{props.user.accountID}</p>
            </Col>
            <Col>
              <h4>نوع الحساب</h4>
              <p>{props.user.accountType}</p>
            </Col>
            <Col>
              <h4>العنوان</h4>
              <p>{props.user.accountAddress}</p>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col>
              <h4>الوصف</h4>
              <p>{props.user.description}</p>
            </Col>
          </Row>
        )}
        {props.type === "companies" && (
          <Row>
            <Col>
              <h4>العنوان</h4>
              <p>{props.user.location}</p>
            </Col>
          </Row>
        )}
        <Row>
          <Col>
            <h4>رقم الهاتف</h4>
            <p>{props.user.phoneNumber}</p>
          </Col>
          {props.type === "users" ? (
            <Col>
              <h4>الرقم الثاني</h4>
              <p>{props.user.accountWhatsApp}</p>
            </Col>
          ) : (
            <Col>
              <h4>البريد الالكتروني</h4>
              <p>{props.user.accountEmail}</p>
            </Col>
          )}
        </Row>
        {props.type === "users" ? (
          <Row>
            <Col>
              <h4>البريد الالكتروني</h4>
              <p>{props.user.accountEmail}</p>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col>
              <h4>الموقع الالكتروني</h4>
              <a target="_blank" href={props.user.website}>
                {props.user.website}
              </a>
            </Col>
          </Row>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

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
              src={
                props.user.accountImage || props.user.logo
                  ? props.type === "users"
                    ? props.user.accountImage
                    : props.user.logo
                  : Avatar
              }
              alt="imageofuser"
            />
          </div>
          <h3 className="d-inline mx-2">
            {props.type === "users"
              ? props.user.accountFName + " " + props.user.accountLName
              : props.user.name}
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
              <p>{props.user.location + " , " + props.user.address}</p>
            </Col>
          </Row>
        )}
        <Row>
          <Col>
            <h4>رقم الهاتف</h4>
            <p>
              {props.type === "users"
                ? props.user.phoneNumber
                : props.user.phone}
            </p>
          </Col>
          {props.type === "users" ? (
            <Col>
              <h4>الرقم الثاني</h4>
              <p>{props.user.accountWhatsApp}</p>
            </Col>
          ) : (
            <Col>
              <h4>البريد الالكتروني</h4>
              <p>{props.user.email}</p>
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
                {props.user.link}
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

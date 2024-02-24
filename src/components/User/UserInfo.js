import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { user } from "../../Data/user";
import { useForm } from "react-hook-form";

export default function UserPage() {
  const [firstName, setfirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [address, setaddress] = useState(user.address);
  const [phoneNumber, setphoneNumber] = useState(user.phoneNumber);
  const [secondNumber, setsecondNumber] = useState(user.secondNumber);
  const [email, setemail] = useState(user.email);
  const [password, setpassword] = useState(user.password);
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
  });
  const handleCheckPassword = () => {
    if(watch("currentPassword") === "" && watch("newPassword") === "") return true
     if (watch("currentPassword") !== password){
         console.log("wrong password");
         return false
     } else {
        return true
     }
  }
  const submitHandler = (formData) => {
    if(handleCheckPassword()){
        console.log(formData);
        alert(`User ${firstName} ${lastName}'s information has been updated!`);
        setpassword(watch("newPassword"))
    }
  }
  return (
    <div className="my-5">
      <Container>
        <Form onSubmit={handleSubmit(submitHandler)}>
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
                <Form.Label>الرقم السري الحالي</Form.Label>
                <Form.Control
                  type="password"
                {... register("currentPassword")}
                  onBlur={() => handleCheckPassword()}
                />
              </Form.Group>
            </Col>
            <Col md="4">
              <Form.Group className="mb-3">
                <Form.Label>الرقم السري الجديد</Form.Label>
                <Form.Control
                  type="password"
                  {...register("newPassword", {
                    minLength: {
                      value: 8,
                      message: "يجب ان تكون كلمة السر اكثر من 8 حروف و ارقام",
                    },
                  })}
                />
                {errors.newPassword && <p className="error">{errors.newPassword.message}</p>}
              </Form.Group>
            </Col>
            <Col md="4">
              <Form.Group className="mb-3">
                <Form.Label>تأكيد الرقم السري الجديد</Form.Label>
                <Form.Control
                  type="password"
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === watch("newPassword") || "كلمتان السر غير متطابقتان",
                  })}

                />
                {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword.message}</p>
        )}
              </Form.Group>
            </Col>
          </Row>
          <Button variant="success" type="submit">حفظ التغييرات</Button>
          <Link to=".." relative="path" className="mx-2">
            <Button variant="danger">عودة</Button>
          </Link>
        </Form>
      </Container>
    </div>
  );
}

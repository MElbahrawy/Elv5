import { Button, Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { governorates } from "../../Data/governorates";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { user } from "../../Data/user";
import axios from "axios";
import { server } from "../../Data/APIs";

/* 

edit data :- 
accountFName
string
accountLName
string
accountStreet
string
accountArea
string
accountCity
string
PhoneNumber
string
accountWhatsApp
string
accountImage
string($binary)

*/

export default function UserPage() {
  let { userId } = useParams();
  // States

  const [dataUser, setDataUser] = useState({});
  const [id, setId] = useState(user.id);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [street, setStreet] = useState(user.street);
  const [area, setArea] = useState(user.area);
  const [city, setCity] = useState(user.city);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [secondNumber, setSecondNumber] = useState(user.secondNumber);
  const [checker, setChecker] = useState(true);

  //   Fetching Data
  useEffect(() => {
    axios
      .get(server.GetByUserId + userId)
      .then((res) => res.data)
      .then((userData) => {
        setId(userData.accountID);
        setFirstName(userData.accountFName);
        setLastName(userData.accountLName);
        setStreet(userData.accountAddress);
        setArea(userData.accountAddress);
        setCity(userData.accountAddress);
        setPhoneNumber(userData.phoneNumber);
        setSecondNumber(userData.accountWhatsApp);
        setDataUser({
          id,
          firstName,
          lastName,
          street,
          area,
          city,
          phoneNumber,
          secondNumber,
        });
      })
      .catch(() => {
        setDataUser({
          id,
          firstName,
          lastName,
          street,
          area,
          city,
          phoneNumber,
          secondNumber,
          password: "admin",
        });
      });
  }, []);
  //   Form Hook
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
  });
  //   Address handling
  //   const handleAddress = (index, value) => {
  //     let newAddress = [...address];
  //     newAddress[index] = value;
  //     setAddress(newAddress);
  //   };
  //   Enable save Changes button if there's a change happen
  useEffect(() => {
    firstName !== dataUser.firstName ||
    lastName !== dataUser.lastName ||
    street !== dataUser.street ||
    area !== dataUser.area ||
    city !== dataUser.city ||
    phoneNumber !== dataUser.phoneNumber ||
    secondNumber !== dataUser.secondNumber
      ? setChecker(false)
      : setChecker(true);
  }, [
    firstName,
    lastName,
    street,
    area,
    city,
    phoneNumber,
    secondNumber,
    dataUser,
  ]);
  //   Submit Handling
  const submitHandler = () => {
    // check if the current user is correct
    axios
      .put(
        userId
          ? `http://154.237.200.76:bg5109/api/Account/${userId}`
          : `http://154.237.200.76:5hh109/api/Account/${id}`,
        {
          id,
          firstName,
          lastName,
          // address,
          phoneNumber,
          secondNumber,
        }
      )
      .catch((err) => {
        console.log(err);
      });
    toast.success("تم التعديل بنجاح");
  };
  return (
    <div className="my-5">
      <Container>
        <Form onSubmit={handleSubmit(submitHandler)}>
          <div className="mb-4 h2">البيانات الشخصية</div>
          <Row>
            {/*id*/}
            <Col md="2">
              <Form.Group className="mb-3">
                <Form.Label>الرقم التعريفي</Form.Label>
                <Form.Control type="text" value={id} disabled />
              </Form.Group>
            </Col>
            {/*First Name */}
            <Col md="3">
              <Form.Group className="mb-3">
                <Form.Label>الاسم الاول *</Form.Label>
                <Form.Control
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
            </Col>
            {/*Last Name */}
            <Col md="3">
              <Form.Group className="mb-3">
                <Form.Label>اسم العائله *</Form.Label>
                <Form.Control
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <div className="mb-4 h2">بيانات التواصل</div>
          {/* Phone */}
          <Row>
            {/* Phone Number */}
            <Col md="3">
              <Form.Group className="mb-3">
                <Form.Label>الرقم الاول *</Form.Label>
                <Form.Control
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Form.Group>
            </Col>
            {/* Second Number */}
            <Col md="3">
              <Form.Group className="mb-3">
                <Form.Label>الرقم الثاني (اختياري)</Form.Label>
                <Form.Control
                  type="text"
                  value={secondNumber}
                  onChange={(e) => setSecondNumber(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          {/* Address */}
          <Row>
            {/* Street */}
            <Col md="2">
              <Form.Group className="mb-3">
                <Form.Label>الشارع *</Form.Label>
                <Form.Control
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </Form.Group>
            </Col>
            {/* Area */}
            <Col md="2">
              <Form.Group className="mb-3">
                <Form.Label>المنطقه *</Form.Label>
                <Form.Control
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </Form.Group>
            </Col>
            {/* Gov */}
            <Col md="2">
              <Form.Group className="mb-3">
                <Form.Label>المحافظه *</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setCity(e.target.value)}
                >
                  {governorates.map((gov, index) => (
                    <option
                      value={gov}
                      key={index}
                      selected={gov === city ? "selected" : ""}
                    >
                      {gov}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <div className="mb-4 h2">الرقم السري</div>
          <Row>
            {/* Current Password */}
            <Col md="4">
              <Form.Group className="mb-3">
                <Form.Label>الرقم السري الحالي *</Form.Label>
                <Form.Control
                  type="password"
                  {...register("currentPassword", {
                    // required: "يرجي ادخال الرقم السري لتأكيد البيانات",
                  })}
                />
                {errors.currentPassword && (
                  <p className="error">{errors.currentPassword.message}</p>
                )}
              </Form.Group>
            </Col>
            {/* New Password */}
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
                {errors.newPassword && (
                  <p className="error">{errors.newPassword.message}</p>
                )}
              </Form.Group>
            </Col>
            {/* Confirm Password */}
            <Col md="4">
              <Form.Group className="mb-3">
                <Form.Label>تأكيد الرقم السري الجديد</Form.Label>
                <Form.Control
                  type="password"
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === watch("newPassword") ||
                      "كلمتان السر غير متطابقتان",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="error">{errors.confirmPassword.message}</p>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Button variant="success" type="submit" disabled={checker}>
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

import { Button, Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { governments } from "../../Data/government";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { user } from "../../Data/user";
import axios from "axios";

export default function UserPage() {
  let { userId } = useParams();
  // States
  const [dataUser, setDataUser] = useState({});
  const [id, setId] = useState(localStorage.id);
  const [firstName, setFirstName] = useState(localStorage.firstName);
  const [lastName, setLastName] = useState(localStorage.lastName);
  const [address, setAddress] = useState(localStorage.address.split("/"));
  const [phoneNumber, setPhoneNumber] = useState(localStorage.phoneNumber);
  const [secondNumber, setSecondNumber] = useState(localStorage.secondNumber);
  const [email, setEmail] = useState(localStorage.email);
  const [checker, setChecker] = useState(true);

  //   Fetching Data
  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/${userId}`)
      .then((res) => res.data)
      .then((user) => {
        setId(user.id);
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setAddress(user.address.split("/"));
        setPhoneNumber(user.phoneNumber);
        setSecondNumber(user.secondNumber);
        setEmail(user.email);
        setDataUser({
          id,
          firstName,
          lastName,
          address,
          phoneNumber,
          secondNumber,
          email,
          password: user.password,
        });
      })
      .catch(() => {
        setDataUser({
          id,
          firstName,
          lastName,
          address,
          phoneNumber,
          secondNumber,
          email,
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
  const handleAddress = (index, value) => {
    let newAddress = [...address];
    newAddress[index] = value;
    setAddress(newAddress);
  };
  //   Enable save Changes button if there's a change happen
  useEffect(() => {
    firstName !== dataUser.firstName ||
    lastName !== dataUser.lastName ||
    address !== dataUser.address ||
    phoneNumber !== dataUser.phoneNumber ||
    secondNumber !== dataUser.secondNumber ||
    watch("newPassword") !== "" ||
    email !== dataUser.email
      ? setChecker(false)
      : setChecker(true);
    // console.log(checker);
  }, [
    firstName,
    lastName,
    address,
    phoneNumber,
    secondNumber,
    email,
    watch("newPassword"),
  ]);
  //   Submit Handling
  const submitHandler = () => {
    // check if the current user is correct
    if (dataUser.password === watch("currentPassword")) {
      axios
        .put(
          userId
            ? `http://localhost:4000/users/${userId}`
            : `http://localhost:4000/users/${id}`,
          {
            id,
            firstName,
            lastName,
            address: address.join("/"),
            phoneNumber,
            secondNumber,
            email,
            password:
              watch("newPassword") === ""
                ? dataUser.password
                : watch("newPassword"),
          }
        )
        .catch((err) => {
          console.log(err);
        });
      toast.success("تم التعديل بنجاح");
    } else {
      // if the password is wrong
      console.log(watch("currentPassword"));
      console.log(dataUser.password);
      toast.error(`الرقم السري الذي ادخلته غير صحيح 
       حاول مره اخري`);
    }
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
          {/* Email */}
          <Row>
            <Col md="6">
              <Form.Group className="mb-3">
                <Form.Label>البريد الالكتروني *</Form.Label>
                <Form.Control
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={address[0]}
                  onChange={(e) => handleAddress(0, e.target.value)}
                />
              </Form.Group>
            </Col>
            {/* District */}
            <Col md="2">
              <Form.Group className="mb-3">
                <Form.Label>المنطقه *</Form.Label>
                <Form.Control
                  type="text"
                  value={address[1]}
                  onChange={(e) => handleAddress(1, e.target.value)}
                />
              </Form.Group>
            </Col>
            {/* Gov */}
            <Col md="2">
              <Form.Group className="mb-3">
                <Form.Label>المحافظه *</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => handleAddress(2, e.target.value)}
                >
                  {governments.map((gov, index) => (
                    <option
                      value={gov}
                      key={index}
                      selected={gov === address[2] ? "selected" : ""}
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
                    required: "يرجي ادخال الرقم السري لتأكيد البيانات",
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

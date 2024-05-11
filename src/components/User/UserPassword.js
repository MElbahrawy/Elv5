import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

export default function UserPassword() {
  let current = "admin";
  const [checker, setChecker] = useState(true);

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
  });
  useEffect(() => {
    watch("newPassword") !== "" ? setChecker(false) : setChecker(true);
  }, [watch("newPassword")]);
  const submitHandler = (formData) => {
    console.log(formData);
    if (formData.currentPassword === current) {
      toast.success("تم التعديل بنجاح");
    } else {
      toast.error("الرقم السري الحالي غير صحيح");
    }
  };
  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <div className="mb-4 h2">تغيير الرقم السري</div>
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
                  value === watch("newPassword") || "كلمتان السر غير متطابقتان",
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
      <ToastContainer />
    </Form>
  );
}

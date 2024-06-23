import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { server } from "../../../Data/APIs";
import { toast, ToastContainer } from "react-toastify";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const submitHandler = (data) => {
    setCheck(true);
    axios
      .post(server.Posts, data.email)
      .then(() => {
        toast.error("البريد الالكتروني او كلمة السر غير صحيح");
        setTimeout(() => {
          navigate(0);
        }, 2500);
      })
      .catch(() => {
        toast.error("البريد الالكتروني او كلمة السر غير صحيح");
        setCheck(false);
      });
  };
  return (
    <div className="login-page">
      <Container>
        <form className="login-form" onSubmit={handleSubmit(submitHandler)}>
          <input
            type="email"
            placeholder="ادخل بريدك الالكتروني"
            {...register("email", {
              required: "يرجي ادخال بريد الكتروني",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "ادخل البريد بطريقة صالحه",
              },
            })}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
          <div className="input-btn">
            <button className="btn" disabled={check}>
              طلب تغيير الرقم السري
            </button>
            <Link to="/sign-up" className="to-signup">
              لست عضو ؟ انضم الان
            </Link>
          </div>
          <ToastContainer />
        </form>
      </Container>
    </div>
  );
}

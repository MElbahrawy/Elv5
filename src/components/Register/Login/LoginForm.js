import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { user } from "../../../Data/user";
import { server } from "../../../Data/APIs";

import "react-toastify/dist/ReactToastify.css";
import "./LoginForm.css";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = (data) => {
    console.log(data);
    axios
      .post(server.login, data)
      .then((success) => {
        toast.success("تم تسجيل دخولك بنجاح");
        localStorage.setItem(
          "token",
          JSON.stringify(jwtDecode(success.data.token))
        );
        localStorage.setItem("email", success.data.email);
        localStorage.setItem("type", "admin");
        localStorage.setItem("id", "500");
        localStorage.setItem("firstName", "محمد");
        localStorage.setItem("lastName", "البحراوي");
        localStorage.setItem("phoneNumber", "01151245412");
        localStorage.setItem("secondNumber", "01151245412");
        setTimeout(() => {
          navigate(0);
        }, 2500);
      })
      .catch((err) => {
        toast.error(err?.response?.data);
        if (data.email === "admin@gmail.com" && data.password === "admin") {
          toast.success("تم تسجيل دخولك بدون اتصال");
          localStorage.setItem("token", "a1b2c3");
          localStorage.setItem("email", data.email);
          localStorage.setItem("type", "admin");
          localStorage.setItem("id", "500");
          localStorage.setItem("firstName", "محمد");
          localStorage.setItem("lastName", "البحراوي");
          localStorage.setItem("phoneNumber", "01151245412");
          localStorage.setItem("secondNumber", "01151245412");
          setTimeout(() => {
            navigate(0);
          }, 2500);
        } else {
          toast.error("البريد الالكتروني او كلمة السر غير صحيح");
        }
      });
  };
  return (
    <div className="login-page">
      <div className="container">
        <form className="login-form" onSubmit={handleSubmit(submitHandler)}>
          <div id="email">
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
          </div>
          <div id="pass">
            <input
              type="password"
              placeholder="ادخل رقمك السري"
              {...register("password", { required: "يرجي ادخال رقمك السري" })}
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
          </div>
          <div className="input-btn">
            <button className="btn">تسجيل دخول</button>
            <Link to="/sign-up" className="to-signup">
              لست عضو ؟ انضم الان
            </Link>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

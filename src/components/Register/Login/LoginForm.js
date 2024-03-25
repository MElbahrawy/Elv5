import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { user } from "../../../Data/user";

import "react-toastify/dist/ReactToastify.css";
import "./LoginForm.css";
import axios from "axios";

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //   const [logedIn, setlogedIn] = useState(false);

  const submitHandler = (data) => {
    axios
      .get("http://localhost:4000/users")
      .then((response) => response.data)
      .then((fetchedData) => {
        const user = fetchedData.find(
          (userFound) =>
            userFound.email === watch("email") &&
            userFound.password === watch("password")
        );
        if (user) {
          localStorage.setItem("token", "a1b2c3");
          localStorage.setItem("id", user.id);
          localStorage.setItem("type", user.type);
          localStorage.setItem("firstName", user.firstName);
          localStorage.setItem("lastName", user.lastName);
          localStorage.setItem("email", user.email);
          localStorage.setItem("address", user.address);
          localStorage.setItem("phoneNumber", user.phoneNumber);
          localStorage.setItem("secondNumber", user.secondNumber);
          toast.success("تم تسجيل دخولك بنجاح");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          toast.error("البريد الالكتروني او كلمة السر غير صحيح");
        }
      })
      .catch(() => {
        if (data.email === "admin@gmail.com" && data.password === "admin") {
          localStorage.setItem("token", "a1b2c3");
          localStorage.setItem("id", user.id);
          localStorage.setItem("type", user.type);
          localStorage.setItem("firstName", user.firstName);
          localStorage.setItem("lastName", user.lastName);
          localStorage.setItem("email", user.email);
          localStorage.setItem("address", user.address);
          localStorage.setItem("phoneNumber", user.phoneNumber);
          localStorage.setItem("secondNumber", user.secondNumber);
          toast.success("تم تسجيل دخولك بنجاح");
          setTimeout(() => {
            navigate(0);
          }, 1000);
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
          {/* {logedIn ? <Navigate to="/" /> : null} */}
        </form>
      </div>
    </div>
  );
}

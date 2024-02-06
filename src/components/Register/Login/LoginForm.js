import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { user } from "../../../Data/user";

import "react-toastify/dist/ReactToastify.css";
import "./LoginForm.css";

export default function LoginForm() {
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

  const [logedIn, setlogedIn] = useState(false);

  const submitHandler = (data) => {
    if (data.email === "admin@gmail.com" && data.password === "admin") {
      localStorage.setItem("token", "a1b2c3");
      user.id = 1;
      user.type = "admin";
      user.firstName = "محمد";
      user.lastName = "البحراوي";
      user.email = "mohamedelbahrawy512@gmail.com";
      user.address = "بنها/القليوبية/مصر";
      user.phoneNumber = "01151245412";
      user.secondNumber = "01062032063";
      console.log(user);
      toast.success("تم تسجيل دخولك بنجاح");
      setlogedIn(true);
    } else {
      toast.error("البريد الالكتروني او كلمة السر غير صحيح");
    }
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
          {logedIn ? <Navigate to="/" /> : null}
        </form>
      </div>
    </div>
  );
}

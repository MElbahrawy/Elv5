import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [success, setSuccess] = useState(false);
  const submitHandler = (data) => {
    setSuccess(true);
    console.log(data);
  };

  const notify = () => toast.success("تم تسجيل دخولك بنجاح");
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

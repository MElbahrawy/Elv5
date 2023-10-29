import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="login-page">
      <div className="container">
        <form className="login-form">
          <div id="user">
            <input
              type="text"
              placeholder="ادخل بريدك الالكتروني"
              name="username"
              value={loginData.email}
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value });
              }}
            />
            <span>لا تترك هذا الحقل فارغ</span>
          </div>
          <div id="pass">
            <input
              type="password"
              placeholder="ادخل رقمك السري"
              name="password"
              value={loginData.password}
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value });
              }}
            />
            <span>لا تترك هذا الحقل فارغ</span>
          </div>
          <div className="input-btn">
            <button className="btn">تسجيل دخول</button>
            <Link to="/sign-up" className="to-signup">
              لست عضو ؟ انضم الان
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

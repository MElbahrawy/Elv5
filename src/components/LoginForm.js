import React from "react";
import "./LoginForm.css";

export default function LoginForm() {
  return (
    <div className="login-page">
      <div className="container">
        <form className="login-form">
          <div id="user">
            <input
              type="text"
              placeholder="ادخل بريدك الالكتروني"
              name="username"
            />
            <span>لا تترك هذا الحقل فارغ</span>
          </div>
          <div id="pass">
            <input
              type="password"
              placeholder="ادخل رقمك السري"
              name="password"
            />
            <span>لا تترك هذا الحقل فارغ</span>
          </div>
          <div className="input-btn">
            <button className="btn">تسجيل دخول</button>
            <a href="/" className="to-signup">
              لست عضو ؟ انضم الان
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

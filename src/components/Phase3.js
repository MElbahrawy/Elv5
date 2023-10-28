import React from "react";
import "./Phase3.css";
export default function Phase3(props) {
  const { data, setData } = props;
  return (
    <div className="contact-data">
      <input
        type="email"
        placeholder="بريدك الالكتروني"
        value={data.email}
        onChange={(e) => {
          setData({ ...data, email: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="الرقم السري"
        value={data.password}
        onChange={(e) => {
          setData({ ...data, password: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="تأكيد الرقم السري"
        value={data.confirmPassword}
        onChange={(e) => {
          setData({ ...data, confirmPassword: e.target.value });
        }}
      />
    </div>
  );
}

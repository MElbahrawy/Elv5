import React from "react";
import "./Phase1.css";
export default function Phase1(props) {
  const { data, setData } = props;

  return (
    <div className="personal-data">
      <input
        type="text"
        placeholder="الاسم الاول"
        value={data.firstName}
        onChange={(e) => {
          setData({ ...data, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="اسم العائله"
        value={data.lastName}
        onChange={(e) => {
          setData({ ...data, lastName: e.target.value });
        }}
      />
      <input
        type="number"
        placeholder="رقم الهاتف"
        value={data.phone}
        onChange={(e) => {
          setData({ ...data, phone: e.target.value });
        }}
      />
    </div>
  );
}

import React, { useState } from "react";
import "./SignUpForm.css";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";

export default function SignUpForm() {
  const [phase, setPhase] = useState(0);
  const [data, setData] = useState({
    type: "user",
    firstName: "",
    lastName: "",
    phone: "",
    buildNo: "",
    street: "",
    state: "",
    gov: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const phases = ["بيانات شخصية", "عنوان / منطقة ", "معلومات الدخول"];
  const showForm = () => {
    switch (phase) {
      case 0:
        return <Phase1 data={data} setData={setData} />;
      case 1:
        return <Phase2 data={data} setData={setData} />;
      default:
        return <Phase3 data={data} setData={setData} />;
    }
  };
  return (
    <div className="signup-page">
      <div className="container">
        <div className="signup-form">
          <div className="Phases">
            <div
              className="progress"
              style={{
                width: `${(phase + 1) * (100 / phases.length)}%`,
              }}
            ></div>
            <span>مرحله 1</span>
            <span>مرحله 2</span>
            <span>مرحله 3</span>
          </div>
          <div className="form-head">{phases[phase]}</div>
          <div className="form-body">{showForm()}</div>
          <div className="form-foot">
            <button
              disabled={phase === 0}
              onClick={() => {
                setPhase((curr) => curr - 1);
              }}
            >
              عودة
            </button>
            <button
              onClick={() => {
                if (phase === phases.length - 1) {
                  alert("Filled Successfully");
                } else {
                  setPhase((curr) => curr + 1);
                }
              }}
            >
              {phase === phases.length - 1 ? "تسجيل" : "التالي"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

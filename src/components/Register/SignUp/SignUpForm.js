import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";
import "./SignUpForm.css";

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
  const handleBack = () => {
    setPhase((perv) => perv - 1);
  };
  const showForm = () => {
    switch (phase) {
      case 0:
        return (
          <Phase1
            phase={phase}
            setPhase={setPhase}
            phases={phases}
            data={data}
            setData={setData}
            handleBack={handleBack}
          />
        );
      case 1:
        return (
          <Phase2
            phase={phase}
            setPhase={setPhase}
            phases={phases}
            data={data}
            setData={setData}
            handleBack={handleBack}
          />
        );
      default:
        return (
          <Phase3
            phase={phase}
            setPhase={setPhase}
            phases={phases}
            data={data}
            setData={setData}
            handleBack={handleBack}
          />
        );
    }
  };
  return (
    <div className="signup-page">
      <div className="container">
        <div className="signup-form">
          <ProgressBar phase={phase} phases={phases} />
          <div className="form-head">{phases[phase]}</div>
          {showForm()}
        </div>
      </div>
    </div>
  );
}

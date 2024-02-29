import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";
import "./SignUpForm.css";

export default function SignUpForm() {
  // control phases
  const [phase, setPhase] = useState(0);
  const phases = ["بيانات شخصية", "عنوان / منطقة ", "معلومات الدخول"];
  const handleBack = () => {
    setPhase((perv) => perv - 1);
  };
  // data
  const [data, setData] = useState({
    id: toString(Math.floor(Math.random() * 100) + 10),
    type: "user",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    secondNumber: "",
    address: "",
    email: "",
    password: "",
  });
  //   Showing phases
  const showForm = () => {
    switch (phase) {
      // personal information phase
      case 0:
        return (
          <Phase1
            setPhase={setPhase}
            data={data}
            setData={setData}
            handleBack={handleBack}
          />
        );
      // address information phase
      case 1:
        return (
          <Phase2
            setPhase={setPhase}
            data={data}
            setData={setData}
            handleBack={handleBack}
          />
        );
      // contact information phase
      default:
        return <Phase3 data={data} setData={setData} handleBack={handleBack} />;
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

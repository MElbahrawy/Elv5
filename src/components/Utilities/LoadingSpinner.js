import React from "react";
import { SkewLoader } from "react-spinners";

export default function LoadingSpinner() {
  return (
    <div
      style={{ height: "calc(100vh - 200px)" }}
      className="d-flex justify-content-center align-items-center flex-column"
    >
      <p>جاري التحميل ...</p>
      <SkewLoader color="#103057" />
    </div>
  );
}

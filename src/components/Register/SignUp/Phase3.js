import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Phase3.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Phase3({ data, setData, handleBack }) {
  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: data,
    mode: "onSubmit",
  });
  const submitHandler = (formData) => {
    setData({
      ...data,
      email: formData.email,
      password: formData.password,
    });
    setConfirmed(true);
  };
  useEffect(() => {
    if (confirmed) {
      axios.post("http://localhost:4000/users", data).then(() => {
        toast.success("تم تسجيل بياناتك بنجاح ، سوف يتم نقلك لتسجيل دخولك");
        setTimeout(() => {
          navigate("login");
        }, 2500);
      });
    }
  }, [confirmed]);

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="form-body">
      <div className="contact-data">
        <input
          type="email"
          placeholder="بريدك الالكتروني"
          {...register("email", {
            required: "يرجي ادخال بريد الكتروني",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "ادخل البريد بطريقة صالحه",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
        <input
          type="password"
          autoComplete="off"
          placeholder="الرقم السري"
          {...register("password", {
            required: "يرجي ادخال رقم سري",
            minLength: {
              value: 8,
              message: "يجب ان تكون كلمة السر اكثر من 8 حروف و ارقام",
            },
          })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
        <input
          type="password"
          placeholder="تأكيد الرقم السري"
          {...register("confirmPassword", {
            required: "يرجي تأكيد رقمك السري",
            validate: (value) =>
              value === watch("password") || "كلمتان السر غير متطابقتان",
          })}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword.message}</p>
        )}
      </div>
      <div className="form-foot">
        <button type="button" onClick={handleBack}>
          عودة
        </button>
        <button type="submit">التالي</button>
      </div>
      <ToastContainer />
    </form>
  );
}

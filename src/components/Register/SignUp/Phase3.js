import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Phase3.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { server } from "../../../Data/APIs.js";

export default function Phase3({ data, setData, handleBack }) {
  const [confirmed, setConfirmed] = useState(false);
  const [check, setCheck] = useState(false);
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
    setCheck(true);
    console.log(formData.img);
    setData({
      ...data,
      username: formData.email,
      email: formData.email,
      password: formData.password,
    });
    setConfirmed(true);
  };
  useEffect(() => {
    if (confirmed) {
      // password 12 at least 1 capital 1 number 1 symbol
      axios
        .post(server.register, data)
        .then((success) => {
          toast.success("تم تسجيل بياناتك بنجاح ، سوف يتم نقلك لتسجيل دخولك");
          setTimeout(() => {
            navigate("/login");
          }, 2500);
        })
        .catch((err) => {
          console.log(err);
          toast.error("حدث خطأ اثناء التسجيل يرجي المحاولة مره اخري");
          setCheck(false);
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
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:<>?~-])[A-Za-z\d!@#$%^&*()_+{}|:<>?~-]{8,}$/,
              message: "يجب ان يحتوي علي الاقل حرف صغير و حرف كبير ورقم ورمز",
            },
            minLength: {
              value: 12,
              message: "يجب ان تكون كلمة السر اكثر من 12 حروف",
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
        <button type="button" onClick={handleBack} disabled={check}>
          عودة
        </button>
        <button type="submit" disabled={check}>
          تسجيل
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}

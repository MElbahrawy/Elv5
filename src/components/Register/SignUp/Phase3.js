import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "./Phase3.css";


export default function Phase3({
  phase,
  setPhase,
  phases,
  data,
  setData,
  handleBack,
}) {
  const [result, setResult] = useState(false);
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
      confirmPassword: formData.confirmPassword,
    });
    setResult(true);
  };
  useEffect(() => {
    if (result) console.log(data);
  }, [data, result]);

  const notify = () => toast.success("تم التسجيل بنجاح");
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
          placeholder="الرقم السري"
          {...register("password", { required: "يرجي ادخال رقم سري" })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
        <input
          type="password"
          placeholder="تأكيد الرقم السري"
          {...register("confirmPassword", {
            required: "يرجي تأكيد رقمك السري",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
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

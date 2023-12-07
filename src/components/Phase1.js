import React from "react";
import { useForm } from "react-hook-form";
import "./Phase1.css";
import ProgressBar from "./ProgressBar";

export default function Phase1({ phase, setPhase, phases, data, setData }) {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: data,
    mode: "onSubmit",
    criteriaMode: "all",
  });
  const submitHandler = (formData) => {
    setData({
      ...data,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
    });
    setPhase((perv) => perv + 1);
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="form-body">
      <div className="personal-data">
        <input
          type="text"
          placeholder="الاسم الاول"
          name="firstName"
          {...register("firstName", {
            required: "يرجي ادخال اسمك الاول",
            minLength: {
              value: 2,
              message: "يجب ان يكون اكثر من حرف",
            },
          })}
        />
        {errors.firstName && (
          <p className="error">{errors.firstName.message}</p>
        )}
        <input
          type="text"
          placeholder="اسم العائله"
          {...register("lastName", { required: "يرجي ادخال اسم العائله" })}
        />
        {errors.lastName && <p className="error">{errors.lastName.message}</p>}
        <input
          type="number"
          placeholder="رقم الهاتف"
          {...register("phone", {
            required: "يرجي ادخال رقم هاتفك",
            pattern: {
              value: /^01[0-9]{9}$/,
              message: "الرقم الذي ادخلته غير صالح",
            },
          })}
        />
        {errors.phone && <p className="error">{errors.phone.message}</p>}
      </div>
      <div className="form-foot">
        <button disabled>عودة</button>
        <button type="submit">التالي</button>
      </div>
    </form>
  );
}

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Phase1.css";

export default function Phase1({ setPhase, data, setData }) {
  const [check, setCheck] = useState(false);
  const {
    register,
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
      phoneNumber: formData.phoneNumber,
      secondNumber: formData.secondNumber || null,
    });
    setPhase((perv) => perv + 1);
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="form-body">
      <div className="personal-data">
        {/* First Name */}
        <input
          type="text"
          placeholder="الاسم الاول *"
          name="firstName"
          {...register("firstName", { required: "يرجي ادخال اسمك" })}
        />
        {errors.firstName && (
          <p className="error">{errors.firstName.message}</p>
        )}
        {/* Last Name */}
        <input
          type="text"
          placeholder="اسم العائله *"
          name="lastName"
          {...register("lastName", { required: "يرجي ادخال اسم العائله" })}
        />
        {errors.lastName && <p className="error">{errors.lastName.message}</p>}
        {/* Phone Number */}
        <input
          type="number"
          placeholder="رقم الهاتف *"
          name="phoneNumber"
          {...register("phoneNumber", {
            required: "يرجي ادخال رقم هاتفك",
            pattern: {
              value: /^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/,
              message: "الرقم الذي ادخلته غير صالح",
            },
          })}
        />
        {errors.phoneNumber && (
          <p className="error">{errors.phoneNumber.message}</p>
        )}
        {/* second Number */}
        <input
          type="number"
          placeholder="رقم الواتس اب"
          disabled={check}
          {...register("secondNumber", {
            pattern: {
              value: /^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/,
              message: "الرقم الذي ادخلته غير صالح",
            },
          })}
        />
        <div className="d-flex align-items-center gap-2 mx-3">
          <input
            type="checkbox"
            className="w-auto m-0"
            id="check"
            onChange={() => setCheck(!check)}
          />
          <label htmlFor="check">ليس لدي واتس اب</label>
        </div>
      </div>
      <div className="form-foot">
        <button disabled>عودة</button>
        <button type="submit">التالي</button>
      </div>
    </form>
  );
}

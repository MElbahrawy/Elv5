import React from "react";
import Button from "react-bootstrap/Button";
import { governorates } from "../../Data/governorates";
import { useForm } from "react-hook-form";

export default function NewUserForm({ submitHandler }) {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    criteriaMode: "all",
  });
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="form-body">
      <div className="personal-data">
        {/* First Name */}
        <input
          type="text"
          placeholder="الاسم الاول *"
          name="firstName"
          {...register("firstName", {
            required: "يرجي ادخال اسمك",
            pattern: {
              value: /^(?!.*\d)[a-zA-Zء-ي]+([ -]?[a-zA-Zء-ي]+)*$/,
              message: "الاسم الذي ادخلته غير صالح",
            },
            minLength: {
              value: 2,
              message: "يجب ان يكون الاسم من حرفين علي الاقل",
            },
          })}
        />
        {errors.firstName && (
          <p className="error">{errors.firstName.message}</p>
        )}
        {/* Last Name */}
        <input
          type="text"
          placeholder="اسم العائله *"
          name="lastName"
          {...register("lastName", {
            required: "يرجي ادخال اسم العائله",
            pattern: {
              value: /^(?!.*\d)[a-zA-Zء-ي]+([ -]?[a-zA-Zء-ي]+)*$/,
              message: "الاسم الذي ادخلته غير صالح",
            },
            minLength: {
              value: 2,
              message: "يجب ان يكون الاسم من حرفين علي الاقل",
            },
          })}
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
          placeholder="رقم الواتس اب *"
          name="secondNumber"
          {...register("secondNumber", {
            required: "يرجي ادخال رقم الواتس اب",
            pattern: {
              value: /^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/,
              message: "الرقم الذي ادخلته غير صالح",
            },
          })}
        />
        {errors.phoneNumber && (
          <p className="error">{errors.phoneNumber.message}</p>
        )}
      </div>
      <br />
      <div className="contact-data">
        <input
          type="email"
          placeholder="البريد الالكتروني"
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
              value: 12,
              message:
                "يجب ان تكون كلمة السر اكثر من 12 حروف و ارقام ورموز وحرف كبير",
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
      <br />
      <div className="address-data">
        <input
          type="address"
          placeholder="الشارع"
          {...register("street", { required: "يرجي ادخال اسم الشارع" })}
        />
        {errors.street && <p className="error">{errors.street.message}</p>}
        <input
          type="text"
          placeholder="المنطقة"
          {...register("state", { required: "يرجي ادخال اسم المنطقه" })}
        />
        {errors.state && <p className="error">{errors.state.message}</p>}

        <select
          className="form-select form-select-md"
          name="gov"
          {...register("gov", { required: "يرجي اختيار المحافظة" })}
        >
          <option value="" default={true}>
            المحافظة
          </option>

          {governorates.map((gov, id) => (
            <option key={id} value={gov}>
              {gov}
            </option>
          ))}
        </select>
        {errors.gov && <p className="error">{errors.gov.message}</p>}
      </div>
      <hr />
      <Button type="submit" variant="success" className="w-100 my-2">
        تسجيل
      </Button>
    </form>
  );
}

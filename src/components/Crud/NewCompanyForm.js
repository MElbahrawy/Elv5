import React from "react";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { governorates } from "../../Data/governorates";

export default function NewUserForm({ submitHandler }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    criteriaMode: "all",
  });
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="form-body">
      <div className="personal-data">
        {/* title */}
        <input
          type="text"
          placeholder="اسم الشركة *"
          name="title"
          {...register("title", {
            required: "يرجي ادخال اسم الشركة",
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
        {errors.title && <p className="error">{errors.title.message}</p>}
        {/* Description */}
        <input
          type="text"
          placeholder="وصف الشركة *"
          name="description"
          {...register("description", {
            required: "يرجي ادخال وصف الشركة",
            minLength: {
              value: 2,
              message: "يجب ان يكون الوصف من حرفين علي الاقل",
            },
          })}
        />
        {errors.description && (
          <p className="error">{errors.description.message}</p>
        )}
        {/* Logo */}
        <input
          type="text"
          placeholder="لوجو الشركة *"
          name="logo"
          {...register("logo", {
            required: "يرجي ادخال لوجو الشركة",
          })}
        />
        {errors.logo && <p className="error">{errors.logo.message}</p>}
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
        {/* Website */}
        <input
          type="text"
          placeholder="الموقع الالكتروني"
          {...register("website", {
            required: "يرجي ادخال موقع الكتروني",
          })}
        />
        {errors.website && <p className="error">{errors.website.message}</p>}
        {/* Phone Number */}
        <input
          type="number"
          placeholder="رقم الهاتف *"
          name="phoneNumber"
          {...register("phoneNumber", {
            required: "يرجي ادخال رقم الهاتف",
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

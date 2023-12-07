import React from "react";
import { useForm } from "react-hook-form";
import "./Phase2.css";
import ProgressBar from "./ProgressBar";

export default function Phase2(props) {
  const { phase, setPhase, phases, data, setData, handleBack } = props;
  const govs = [
    "القاهرة",
    "الجيزة",
    "الإسكندرية",
    "الدقهلية",
    "الشرقية",
    "المنوفية",
    "القليوبية",
    "البحيرة",
    "الغربية",
    "بورسعيد",
    "دمياط",
    "الإسماعيلية",
    "السويس",
    "كفر الشيخ",
    "الفيوم",
    "بني سويف",
    "مطروح",
    "شمال سيناء",
    "جنوب سيناء",
    "المنيا",
    "أسيوط",
    "سوهاج",
    "قنا",
    "البحر الأحمر",
    "الأقصر",
    "أسوان",
    "الوادي الجديد",
  ];

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: data,
    mode: "onSubmit",
  });
  const submitHandler = (formData) => {
    setData({
      ...data,
      buildNo: formData.buildNo,
      street: formData.street,
      state: formData.state,
      gov: formData.gov,
    });
    setPhase((perv) => perv + 1);
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="form-body">
      <div className="address-data">
        <input
          type="number"
          placeholder="رقم المبني"
          {...register("buildNo", { required: "يرجي ادخال رقم المبني" })}
        />
        {errors.buildNo && <p className="error">{errors.buildNo.message}</p>}
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
          <option hidden="true">المحافظة</option>
          <option disabled="disabled" default="true">
            المحافظة
          </option>
          {govs.map((gov, id) => (
            <option key={id}>{gov}</option>
          ))}
        </select>
        {errors.gov && <p className="error">{errors.gov.message}</p>}
      </div>
      <div className="form-foot">
        <button type="button" onClick={handleBack}>
          عودة
        </button>
        <button type="submit">التالي</button>
      </div>
    </form>
  );
}

import React from "react";
import { useForm } from "react-hook-form";
import { governments } from "../../../Data/government";
import "./Phase2.css";

export default function Phase2(props) {
  const { setPhase, data, setData, handleBack } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: data,
    mode: "onSubmit",
  });
  const submitHandler = (formData) => {
    setData({
      ...data,
      address: formData.street + "/" + formData.state + "/" + formData.gov,
    });
    setPhase((perv) => perv + 1);
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="form-body">
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
          <option value="" default="true">
            المحافظة
          </option>

          {governments.map((gov, id) => (
            <option key={id} value={gov}>
              {gov}
            </option>
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

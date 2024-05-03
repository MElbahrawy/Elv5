import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { server } from "../../Data/APIs";

export default function AddElevator() {
  const [id, setId] = useState();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    criteriaMode: "all",
  });
  const submitHandler = (formData) => {
    axios
      .post(server.CreateDevice, formData)
      .then((res) => setId(res.data.id))
      .then(() => reset())
      .catch((err) => console.log(err));
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className=" d-flex flex-column"
    >
      <div className="personal-data">
        {/* <input
          type="number"
          placeholder="رقم المبني"
          {...register("buildId", { required: "ادخل رقم المبني" })}
        />
        {errors.buildId && <p className="error">{errors.buildId.message}</p>} */}
        <input
          type="text"
          placeholder="اسم المصعد"
          {...register("name", { required: "ادخل اسم المصعد" })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
        <input
          type="text"
          placeholder="secret code"
          {...register("secretCode", { required: "secret code" })}
        />
        {errors.secretCode && (
          <p className="error">{errors.secretCode.message}</p>
        )}
        <input
          type="number"
          placeholder="عدد الدور"
          {...register("floors", { required: "ادخل عدد الدور" })}
        />
        {errors.floors && <p className="error">{errors.floors.message}</p>}
        <hr />
        <Button type="submit" variant="success" className="w-100 my-2">
          تسجيل
        </Button>
        <p>رقم الجهاز : {id ? id : null}</p>
      </div>
    </form>
  );
}

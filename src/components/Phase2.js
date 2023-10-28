import React from "react";
import "./Phase2.css";

export default function Phase2(props) {
  const { data, setData } = props;
  //   const gov = [
  //     { govAr: "القاهرة", govEn: "" },
  //     { govAr: "الجيزة", govEn: "" },
  //     { govAr: "الإسكندرية", govEn: "" },
  //     { govAr: "الدقهلية", govEn: "" },
  //     { govAr: "الشرقية", govEn: "" },
  //     { govAr: "المنوفية", govEn: "" },
  //     { govAr: "القليوبية", govEn: "" },
  //     { govAr: "البحيرة", govEn: "" },
  //     { govAr: "الغربية", govEn: "" },
  //     { govAr: "بورسعيد", govEn: "" },
  //     { govAr: "دمياط", govEn: "" },
  //     { govAr: "الإسماعيلية", govEn: "" },
  //     { govAr: "السويس", govEn: "" },
  //     { govAr: "كفر الشيخ", govEn: "" },
  //     { govAr: "الفيوم", govEn: "" },
  //     { govAr: "بني سويف", govEn: "" },
  //     { govAr: "مطروح", govEn: "" },
  //     { govAr: "شمال سيناء", govEn: "" },
  //     { govAr: "جنوب سيناء", govEn: "" },
  //     { govAr: "المنيا", govEn: "" },
  //     { govAr: "أسيوط", govEn: "" },
  //     { govAr: "سوهاج", govEn: "" },
  //     { govAr: "قنا", govEn: "" },
  //     { govAr: "البحر الأحمر", govEn: "" },
  //     { govAr: "الأقصر", govEn: "" },
  //     { govAr: "أسوان", govEn: "" },
  //     { govAr: "الوادي الجديد", govEn: "" },
  //   ];

  return (
    <div className="address-data">
      <input
        type="number"
        placeholder="رقم المبني"
        value={data.buildNo}
        onChange={(e) => {
          setData({ ...data, buildNo: e.target.value });
        }}
      />
      <input
        type="address"
        placeholder="الشارع"
        value={data.street}
        onChange={(e) => {
          setData({ ...data, street: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="المنطقة"
        value={data.state}
        onChange={(e) => {
          setData({ ...data, state: e.target.value });
        }}
      />
      <select
        className="form-select form-select-md"
        name="gov"
        onChange={(e) => {
          setData({ ...data, gov: e.target.value });
          console.log(data);
        }}
      >
        <option defaultValue="selected" disabled>
          المحافظة
        </option>
        <option>القاهرة</option>
        <option>الجيزة</option>
        <option>الإسكندرية</option>
        <option>الدقهلية</option>
        <option>الشرقية</option>
        <option>المنوفية</option>
        <option>القليوبية</option>
        <option>البحيرة</option>
        <option>الغربية</option>
        <option>بورسعيد</option>
        <option>دمياط</option>
        <option>الإسماعيلية</option>
        <option>السويس</option>
        <option>كفر الشيخ</option>
        <option>الفيوم</option>
        <option>بني سويف</option>
        <option>مطروح</option>
        <option>شمال سيناء</option>
        <option>جنوب سيناء</option>
        <option>المنيا</option>
        <option>أسيوط</option>
        <option>سوهاج</option>
        <option>قنا</option>
        <option>البحر الأحمر</option>
        <option>الأقصر</option>
        <option>أسوان</option>
        <option>الوادي الجديد</option>
      </select>
    </div>
  );
}

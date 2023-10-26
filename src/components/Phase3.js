import React from "react";
import "./Phase3.css";

export default function Phase1() {
  return (
    <div className="address-data">
      <input type="number" placeholder="رقم المبني" />
      <input type="address" placeholder="الشارع" />
      <input type="text" placeholder="المنطقة" />
      <select class="form-select form-select-md" name="gov">
        <option selected="selected" disabled>
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

import React from "react";
import { Container } from "react-bootstrap";

export default function AboutPage() {
  return (
    <div className="m-5">
      <Container>
        <h2 className="mt-5 mb-3 text-center">عن الشركة</h2>
        <p>
          نحن شركة ناشئه في مجال تطوير المصاعد لتحويلها لمصاعد ذكية سهل التحكم
          بها عن طريق الهاتف و انترنت الاشياء ( iot ) <br />
          نحن نهدف لتسهيل وتوصيل خدمتنا بين الموردين و العملاء <br />
          نحن نعتقد اننا سنكون الاول في مصر و الشرق الاوسط وأفريقيا في عملية
          تحويل المصاعد الكهربائية لمصاعد ذكية ابتدأ من عام 2024
        </p>
        <hr />
        <h2 className="mt-5 mb-3 text-center">رؤيتنا</h2>
        <p>
          ان نكون الاول و الافضل في عملية تحويل المصاعد لمصاعد ذكية ويسهل
          استخدامها{" "}
        </p>
        <hr />
        <h2 className="mt-5 mb-3 text-center">مهمتنا</h2>
        <p>
          ربط العملاء و الموردين و الفنيين في مكان واحد لتوفير كل سبل الراحه و
          السهولة و الامان وتكون الخدمة في مكان واحد
        </p>
        <hr />
        <h2 className="mt-5 mb-3 text-center">قيمنا</h2>
        <ol>
          <li>العدالة</li>
          <p>بين الموظفين - العملاء - الموردين - الفنيين</p>
          <li>الاحتراف</li>
          <p>في التصميم - التنفيذ - التعاقد</p>
          <li>السهولة</li>
          <p>في الاستخدام - التواصل - الاختيار</p>
          <li>الابداع</li>
          <p>في الافكار - التنفيذ - التطوير</p>
        </ol>
        <hr />
      </Container>
    </div>
  );
}

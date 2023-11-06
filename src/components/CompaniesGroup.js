import React from "react";
import Company from "./Company";
import "./CompaniesGroup.css";
export default function CompaniesGroup() {
  const companiesData = [
    {
      id: "1",
      title: "مؤسسة الفتح للمصاعد",
      description:
        "نحن مؤسسة الفتح للمصاعد خبرة 20 عاما في مجال المصاعد، متخصصون في (توريد - وتركيب وصيانة - وتطوير جميع أنواع المصاعد المحلية و الباكدج (. كما تقوم بتوريد وتركيب المصاعد بدون غرفة ماكينات. الشركة حاصلة على رخصة مزاولة أعمال المصاعد وتركيب المصاعد بدون غرفة ماكينات. الشركة حاصلة على رخصة مزاولة أعمال المصاعد وعضوية الاتحاد المصري لمقاولي التشييد والبناء رقم (70159) ",
      location:
        "برج البشطمير, الشقة 1, الدور 1, دوران المجزر - الدقهلية - المنصورة",
      logo: "https://static.wixstatic.com/media/8980c5_dd3bf119127d4fb7b21459b43d0bd830~mv2.png/v1/fill/w_186,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo.png",
      website: "https://www.elfathelevators.com/",
      email: "alfath.elevator@gmail.com",
      phone: "+201008479268",
    },
    {
      id: "2",
      title: "مؤسسة الفتح للمصاعد",
      description:
        "نحن مؤسسة الفتح للمصاعد خبرة 20 عاما في مجال المصاعد، متخصصون في (توريد - وتركيب وصيانة - وتطوير جميع أنواع المصاعد المحلية و الباكدج (. كما تقوم بتوريد وتركيب المصاعد بدون غرفة ماكينات. الشركة حاصلة على رخصة مزاولة أعمال المصاعد وتركيب المصاعد بدون غرفة ماكينات. الشركة حاصلة على رخصة مزاولة أعمال المصاعد وعضوية الاتحاد المصري لمقاولي التشييد والبناء رقم (70159) ",
      location:
        "برج البشطمير, الشقة 1, الدور 1, دوران المجزر - الدقهلية - المنصورة",
      logo: "https://static.wixstatic.com/media/8980c5_dd3bf119127d4fb7b21459b43d0bd830~mv2.png/v1/fill/w_186,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo.png",
      website: "https://www.elfathelevators.com/",
      email: "alfath.elevator@gmail.com",
      phone: "+201008479268",
    },
    {
      id: "3",
      title: "مؤسسة الفتح للمصاعد",
      description:
        "نحن مؤسسة الفتح للمصاعد خبرة 20 عاما في مجال المصاعد، متخصصون في (توريد - وتركيب وصيانة - وتطوير جميع أنواع المصاعد المحلية و الباكدج (. كما تقوم بتوريد وتركيب المصاعد بدون غرفة ماكينات. الشركة حاصلة على رخصة مزاولة أعمال المصاعد وتركيب المصاعد بدون غرفة ماكينات. الشركة حاصلة على رخصة مزاولة أعمال المصاعد وعضوية الاتحاد المصري لمقاولي التشييد والبناء رقم (70159) ",
      location:
        "برج البشطمير, الشقة 1, الدور 1, دوران المجزر - الدقهلية - المنصورة",
      logo: "https://static.wixstatic.com/media/8980c5_dd3bf119127d4fb7b21459b43d0bd830~mv2.png/v1/fill/w_186,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo.png",
      website: "https://www.elfathelevators.com/",
      email: "alfath.elevator@gmail.com",
      phone: "+201008479268",
    },
  ];
  return (
    <div className="companies">
      {companiesData.map((company) => (
        <Company
          key={company.id}
          title={company.title}
          description={company.description}
          location={company.location}
          logo={company.logo}
          website={company.website}
          email={company.email}
          phone={company.phone}
        />
      ))}
    </div>
  );
}

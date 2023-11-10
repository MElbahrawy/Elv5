import React, { useState } from "react";
import PostCard from "./PostCard";
import "./PostsList.css";

export default function PostsList() {
  const postsData = [
    {
      id: 1,
      img: "",
      name: "ابراهيم جابر",
      type: "مستخدم",
      date: "14س",
      content: `لا أحب هؤلاء السُذّج الذين يتخرجون بمعدلات عالية، وتخصصات علمية مهمة، لكنهم لا يسمعون الموسيقى، ولا يعرفون شاعراً واحداً، ولم يحضروا فيلم سينما، أو يحاولوا كتابة قصيدة، أو أن يخلطوا علبة ألوان ليرسموا لوحة..
      أنا لا أفهم هؤلاء الناس الذين بلا طقوس شخصية بلا عادات بلا تفاصيل ، لا يهتمون بألوان الأزرار ، ولا خشب المقاعد ويرضون بأي سائل ساخن أحمر فلا يتوقفون عند نوع الشاي .
      الحياة في التفاصيل ، في الأحاسيس ، في الذائقة .. في معنى أن تهز رأسك حزناً أو فرحاً أو طرباً لمقطع من أغنية قديمة ، أو أن تنفعل برائحة الياسمين تهب من شارع عتيق على الدوار الأول.

      — إبراهيم جابر إبراهيم.`,
      phoneNumber: "01151245412",
    },
    {
      id: 2,
      img: "",
      name: "محمد البحراوي",
      type: "مالك",
      date: "14س",
      content: `لقد إنتهت المرحلة التي كنت ألوم فيها عائلتي وأصدقائي، والمجتمع، والعالم
        أجل لقد بدأت أفهم أن الشخص الوحيد الذي يمكن أن ينقذني بعد الله هو أنا..
        الشخص الوحيد الذي يمكنه كسري هو أنا 
        الشخص الوحيد الذي يجب أن ألقي عليه اللوم هو أنا وليس شخصاً آخر غيري.. 
        حياتي، صحتي، أفكاري، مشاعري، أفعالي، قراراتي نجاحي وفشلي هي مسؤوليتي أنا 
        العالم لا يدين لي بشيء فالعالم لا يهتم 
        العالم ليس كله ضدي وليس كله معي  
        العالم كان موجوداً قبل أن أولد وسيظل موجوداً بعد أن أموت العالم يستمر والوقت يمضي قدماَ
        إما أن أنجح أو أو أخسر، إما أن أقاوم وأتحمل وأمضي قدما، أو أفقد الأمل وأستسلم.. 
        وفي كل الأحوال انا مسؤولُ عما حدث  
        وعما يحدث وعما سيحدث لي..`,
      phoneNumber: "01151245412",
    },
  ];
  return (
    <div className="posts-holder">
      {postsData.map((post) => (
        <>
          <hr />
          <PostCard
            key={post.id}
            img={post.img}
            name={post.name}
            type={post.type}
            date={post.date}
            content={post.content}
            phoneNumber={post.phoneNumber}
          />
        </>
      ))}
    </div>
  );
}

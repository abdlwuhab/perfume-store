import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-6">عن المتجر</h1>
      <p className="leading-relaxed text-gray-700">
        متجرنا متخصص في تقديم أفضل العطور الذكية بعام 2025. نهدف لتوفير تجربة
        تسوق سلسة وراقية لعملائنا، مع تشكيلة متنوعة من العطور الفاخرة التي تناسب
        جميع الأذواق.
      </p>
      <p className="mt-4 text-gray-600">
        نفتخر بتقديم خدمة عملاء مميزة وتوصيل سريع لضمان راحتك ورضاك الدائم.
      </p>
    </div>
  );
};

export default About;

import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>تواصل معنا</h2>
      <form>
        <input type="text" placeholder="الاسم" required />
        <input type="email" placeholder="البريد الإلكتروني" required />
        <textarea placeholder="رسالتك" required></textarea>
        <button type="submit">إرسال</button>
      </form>
    </section>
  );
}

export default Contact;

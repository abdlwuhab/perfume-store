import React, { useState } from "react";
import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`تم الاشتراك بنجاح: ${email}`);
    setEmail("");
  };

  return (
    <section className="newsletter">
      <h2>اشترك في نشرتنا البريدية</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">اشترك</button>
      </form>
    </section>
  );
}

export default Newsletter;

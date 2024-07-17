import React from "react";
import "./ContactSection.css";
import Link from "next/link";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export default function ContactSection() {
  const header = `${fraunces.className} contact-header`;
  const body = `${fraunces.className} contact-body`;

  return (
    <section className="contact-section">
      <div className="header1">
        <header className={header}>Let&#39;s Get in Touch</header>
        <div className={body}>
          Feel free to give me a call. I offer a 15 minute complimentary phone
          consultation and I would love to hear from you.
        </div>
      </div>
      <button className="contact-button">
        <Link href="/contact"> Contact Me</Link>
      </button>
    </section>
  );
}

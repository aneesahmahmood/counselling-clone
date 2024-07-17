import React from "react";
import "./FaqTitle.css";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const faqTitle = `${fraunces.className} faq-title`;

function FaqTitle() {
  return <h1 className={faqTitle}>Frequently Asked Questions</h1>;
}

export default FaqTitle;

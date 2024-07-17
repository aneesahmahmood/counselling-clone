import React from "react";
import "./Subheading.css";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function Subheading() {
  const subheading = `${fraunces.className} subheading`;
  return (
    <div className={subheading}>
      I have immediate openings for online therapy and would be honored to
      support you during this time of uncertainty.
    </div>
  );
}

export default Subheading;

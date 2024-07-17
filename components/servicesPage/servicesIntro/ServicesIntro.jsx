import React from "react";
import Image from "next/image";
import { Fraunces } from "next/font/google";

import Gaz from "../../../photos/Gaz.jpeg";
import "./ServicesIntro.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function ServicesIntro() {
  const introText = `${fraunces.className} intro-text`;
  return (
    <>
      <div className="intro-div">
        <div className="intro-text-section">
          <p className={introText}>What I Offer</p>
        </div>
        <div className="parent">
          <div className="block"></div>
          <Image className="image" src={Gaz} alt="Ghazala Aziz" />
        </div>
      </div>
    </>
  );
}

export default ServicesIntro;

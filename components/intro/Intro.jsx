import Image from "next/image";
import React from "react";
import Gaz from "../../photos/Gaz.jpeg";
import { Fraunces } from "next/font/google";
import "./Intro.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function Intro() {
  const introText = `${fraunces.className} intro-text`;
  return (
    <>
      <div className="intro-div">
        <p className={introText}>
          Your journey to mental wellness begins here.
        </p>
        <div className="parent">
          <div className="block"></div>
          <Image className="image" src={Gaz} alt="Ghazala Aziz" />
        </div>
      </div>
    </>
  );
}
export default Intro;

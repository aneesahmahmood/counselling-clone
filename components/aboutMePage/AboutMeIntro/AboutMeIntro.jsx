import React from "react";
import Image from "next/image";
import Gaz from "../../../photos/Gaz.jpeg";
import { Fraunces } from "next/font/google";
import "../AboutMeIntro/AboutMeIntro.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function AboutMeIntro() {
  const introTitle = `${fraunces.className} intro-title`;
  return (
    <>
      <h1 className={introTitle}>Get to know Ghazala Aziz</h1>
      <div className="about-page-div">
        <div className="about-me-intro">
          Choosing to become a counsellor was driven by my deep commitment to
          helping others navigate their personal challenges and discover their
          true selves. Witnessing the profound impact that genuine support and
          understanding can have on individuals' lives inspired me to pursue
          this path. I wanted to be part of that transformative journey,
          providing the kind of empathetic and empowering presence that can make
          a real difference.
          <br /> <br />
          I firmly believe that people hold the answers to their own questions.
          By collaborating and following your lead, I aim to highlight your
          strengths and reflect your deepest thoughts. The real transformation
          happens when you allow yourself the space to explore your past and
          present experiences with curiosity, opening up new perspectives and
          insights. This journey encourages you to embrace and express your
          truest, most authentic self.
          <br /> <br /> 
          My goal as a counsellor is to offer a safe and supportive environment
          where individuals can explore their feelings and thoughts without
          judgment. Through this process, I strive to empower clients to find
          clarity, build resilience, and ultimately lead more fulfilling lives.
        </div>
        <Image className="image" src={Gaz} alt="Ghazala Aziz" />
      </div>
    </>
  );
}

export default AboutMeIntro;

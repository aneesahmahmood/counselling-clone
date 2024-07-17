import React from "react";
import Image from "next/image";
import photo from "../../photos/Gaz.jpeg";
import "./Main.css";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
``;

export default function Main() {
  const mainTitle = `${fraunces.className} title`;
  const text = `${fraunces.className} description`;
  return (
    <div>
      <h1 className={mainTitle}>Hi, I&#39;m Ghazala Aziz</h1>
      <main className="main">
        <div className="intro">
          <p className={text}>
            A licensed mental health counsellor with a passion for supporting
            individuals through tough times.
            <br />
            <br />
            Specialising in anxiety, depression, and trauma, I offer a
            supportive, evidence-based approach.
            <br />
            <br />
            My aim is to guide clients through personal growth, providing
            empathetic and client-centred care.
          </p>
          <div className="image-container">
            <Image className="intro-image" src={photo} alt="Plant" />
          </div>
        </div>
      </main>
    </div>
  );
}

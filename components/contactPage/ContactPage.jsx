import React from "react";
import Image from "next/image";
import { Fraunces } from "next/font/google";

import Office from "../../photos/office.jpeg";
import "./ContactPage.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function ContactPage() {
  const contactTitle = `${fraunces.className} contact-title`;
  const phone = `${fraunces.className} phone`;
  const phoneNumber = `${fraunces.className} phonenumber`;
  const email = `${fraunces.className} email`;
  const emailAddress = `${fraunces.className} emailaddress`;

  return (
    <div className="contact-page">
      <h1 className={contactTitle}>Contact</h1>
      <div className="container">
        <div className="contact-info">
          <div className="contact-item">
            <p className={phone}>Phone</p>
            <br />
            <p className={phoneNumber}>07772862510</p>
            <br />
          </div>
          <div className="contact-item">
            <p className={email}>Email</p>
            <br />
            <p className={emailAddress}>ghazala_aziz@hotmail.com</p>
            <br />
          </div>
        </div>
        <div className="contact-image">
          <Image className="office" src={Office} alt="Ghazala Aziz" />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

import Navbar from "@/components/navbar/Navbar";
import React from "react";
import ServicesIntro from "@/components/servicesPage/servicesIntro/ServicesIntro";
import ServicesMain from "@/components/servicesPage/servicesMain/ServicesMain";
import Footer from "@/components/footer/Footer";
import Subheading from "@/components/subheading/Subheading";

function Services() {
  return (
    <>
      <Navbar />
      <Subheading />
      <ServicesIntro />
      <ServicesMain />
      <Footer />
    </>
  );
}

export default Services;

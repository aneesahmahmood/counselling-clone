import Qualifications from "@/components/aboutMePage/Qualifications/Qualifications";
import AboutMeIntro from "../../../components/aboutMePage/AboutMeIntro/AboutMeIntro";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Subheading from "@/components/subheading/Subheading";

const About = () => {
  return (
    <section>
      <Navbar />
      <Subheading />
      <AboutMeIntro />
      <Qualifications />
      <Footer />
    </section>
  );
};

export default About;

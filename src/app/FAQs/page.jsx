import FaqTitle from "@/components/faqPage/FaqTitle";
import Accordian from "../../../components/accordian/Accordian";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Subheading from "@/components/subheading/Subheading";

const Faq = () => {
  return (
    <>
      <Navbar />
      <Subheading />
      <FaqTitle />
      <Accordian />
      <Footer />
    </>
  );
};

export default Faq;

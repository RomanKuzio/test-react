import Header from "../components/header";
import HomePage from "../views/home";
import Services from "../views/services";
import VideoSectionContent from "../views/video_section";
import News from "../views/news";
import ContactUs from "../views/contact-us";
import Footer from "../components/footer";

export default function Home() {
  const scrollToContactUs = () => {
    const element = document.getElementById("contact_us");

    element.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <>
      <Header scrollToContactUs={scrollToContactUs} />
      <HomePage scrollToContactUs={scrollToContactUs} />
      <Services />
      <VideoSectionContent />
      <News />
      <ContactUs />
      <Footer scrollToContactUs={scrollToContactUs} />
    </>
  );
}

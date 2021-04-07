import Header from "../components/header";
import HomePage from "../views/home";
import Services from "../views/services";
import VideoSectionContent from "../views/video_section";
import News from "../views/news";
import ContactUs from "../views/contact-us";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <Services />
      <VideoSectionContent />
      <News />
      <ContactUs />
      <Footer />
    </>
  );
}

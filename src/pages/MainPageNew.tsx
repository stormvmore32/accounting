import BarApp from "../components/AppBar";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import UsefulInformation from "../components/UsefulInformation";

const MainPageNew = () => {
  return (
    <>
      <BarApp />
      <HeroSection />
      <ServiceSection />
      <UsefulInformation />
      <FAQ />
      <Footer />
    </>
  );
};

export default MainPageNew;

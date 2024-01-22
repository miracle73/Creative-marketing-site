import Footer from "../Components/Footer";
import GetStarted from "../Components/GetStarted";
import Navbar from "../Components/Navbar";
import ServiceHero from "../Components/ServiceHero";
import Testimonials from "../Components/Testimonials";
const ServicePage = () => {
  return (
    <div className="">
      <Navbar />
      <ServiceHero />
      <Testimonials />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default ServicePage;

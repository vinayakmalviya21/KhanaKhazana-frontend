import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ContactUsPage from "./pages/ContactUsPage";
import ServicePage from "./pages/ServicePage";

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicePage />
      <ContactUsPage />
      <Footer/>
    </>
  );
}

export default App;

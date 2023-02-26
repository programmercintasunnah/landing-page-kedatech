import React from "react";
import AboutComponent from "../components/AboutComponent";
import ContactComponent from "../components/ContactComponent";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import PricingComponent from "../components/PricingComponent";

const Home = () => {
  return (
    <div>
      <NavbarComponent />
      <AboutComponent />
      <PricingComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
};

export default Home;

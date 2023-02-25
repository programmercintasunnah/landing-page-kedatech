import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";
import HomeComponent from "./components/HomeComponent";
import NavbarComponent from "./components/NavbarComponent";
import PricingComponent from "./components/PricingComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <HomeComponent />
      <AboutComponent />
      <PricingComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}

export default App;

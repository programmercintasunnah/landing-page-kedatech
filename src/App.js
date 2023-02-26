import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";
import LoginComponent from "./components/LoginComponent";
import NavbarComponent from "./components/NavbarComponent";
import PricingComponent from "./components/PricingComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <AboutComponent />
      <PricingComponent />
      <ContactComponent />
      <FooterComponent />
      <LoginComponent />
    </div>
  );
}

export default App;

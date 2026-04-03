import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

import Home from "../src/pages/home";
import About from "./pages/about";
import ContactFooter from "./pages/contactus";
import Service from "./pages/service";
import Location from "./pages/location";

// --- SCROLL TO TOP LOGIC ---
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ye line page load hote hi view ko top par shift kar degi
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      {/* ScrollToTop ko BrowserRouter ke andar hona zaroori hai */}
      <ScrollToTop />
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactFooter />} />
        
        {/* UPDATED DYNAMIC ROUTE */}
        <Route path="/location/:city" element={<Location />} />
        
        {/* Optional: Keep a general locations page if needed */}
        <Route path="/locations" element={<Location />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
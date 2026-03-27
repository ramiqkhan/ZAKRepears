import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

import Home from "../src/pages/home";
import About from "./pages/about";
import ContactFooter from "./pages/contactus";
import Service from "./pages/service";
import Location from "./pages/location";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactFooter />} />
        
        {/* UPDATED DYNAMIC ROUTE */}
        {/* This ":city" allows the page to change content based on the URL */}
        <Route path="/location/:city" element={<Location />} />
        
        {/* Optional: Keep a general locations page if needed */}
        <Route path="/locations" element={<Location />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
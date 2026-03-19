import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

import Home from "../src/pages/home";
import Service from "./pages/service";
import About from "./pages/about";
import ContactFooter from "./pages/contactus";




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
    <Route path="/services" element={<Service />} />
    <Route path="/about" element={<About />} />
     <Route path="/contact" element={<ContactFooter />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

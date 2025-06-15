import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Amenities from "./components/Amenities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Arcade from "./components/Arcade";
import Infinity from "./components/Infinity";
import Differentiation from "./components/Differentiation";
import About from "./pages/About";
import { Toaster } from "react-hot-toast";
import Awards from "./components/Awards";
import Partner from "./pages/Partner";
import ContactUs from "./pages/ContactUs";
import Residential from "./pages/Residential";
function MainPage() {
  return (
    <>
      <Header />
      <Hero />
      <Arcade />
      <Infinity />
      <Differentiation />
      <Experience />
      <Amenities />
      <Awards />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <motion.div
        className="min-h-screen scroll-smooth"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          scrollBehavior: 'smooth'
        }}
      >
        <Toaster position="top-right" />

        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partner/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="Residential" element={<Residential />} />
          {/* Add more routes as needed */}
        </Routes>
      </motion.div>
    </BrowserRouter>
  );
}

export default App;
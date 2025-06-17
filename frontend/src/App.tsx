import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { motion } from "framer-motion";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Amenities from "./components/Amenities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Arcade from "./components/Arcade";
import Infinity from "./components/Infinity";
import Differentiation from "./components/Differentiation";
import Awards from "./components/Awards";
import About from "./pages/About";
import Partner from "./pages/Partner";
import ContactUs from "./pages/ContactUs";
import Residential from "./pages/Residential";
import { Toaster } from "react-hot-toast";

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
    </>
  );
}

// 👇 Locomotive Scroll wrapper to re-init on route change
function ScrollWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current!,
      smooth: true,
      lerp: 0.08,
    });

    scroll.update();

    return () => {
      scroll.destroy();
    };
  }, [location.pathname]); // re-init on route change

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <ScrollWrapper>
        <motion.div
          className="min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
        {/* passing Navbar on evey page's top */}
          <Header />

          {/* routes starting */}
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Partner />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/residential" element={<Residential />} />
          </Routes>
          {/* Passing Footer on every page's bottom */}
          <Footer/>
        </motion.div>
      </ScrollWrapper>
    </BrowserRouter>
  );
}

export default App;

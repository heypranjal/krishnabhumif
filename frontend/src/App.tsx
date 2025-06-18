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
import Commercial from "./pages/Commercial";
import Social from "./components/Social";

const featherImage = "https://i.ibb.co/pj3ndCj6/feather-copy.png";

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
      <Social />
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
      <div className="min-h-screen relative">
        {/* Global Background */}
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${featherImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.8,
          }}
        />
        
        {/* All content with higher z-index */}
        <div className="relative z-10">
          <ScrollWrapper>
            <motion.div
              className="min-h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              {/* passing Navbar on every page's top */}
              <Header />

              {/* routes starting */}
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/partners" element={<Partner />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/residential" element={<Residential />} />
                <Route path="/commercial" element={<Commercial />} />

              </Routes>
              {/* Passing Footer on every page's bottom */}
              <Footer/>
            </motion.div>
          </ScrollWrapper>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
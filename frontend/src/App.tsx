// import React from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Amenities from "./components/Amenities";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  // You can make this dynamic later using URL query or routing
  // const leadSource: "Facebook" | "YouTube" | "Website" = "Website";

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Toaster position="top-right" />
      <Header />
      <Hero />
      <Experience />
      <Amenities />
      <Testimonials />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;

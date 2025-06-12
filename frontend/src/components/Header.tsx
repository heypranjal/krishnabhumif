import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Phone, Star, Users, MapPin } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'experience', label: 'Experience', icon: Star },
    { id: 'amenities', label: 'Amenities', icon: MapPin },
    { id: 'testimonials', label: 'Reviews', icon: Users },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className={`text-2xl font-bold ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Krishna Bhumi
            </span>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 relative group ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-orange-600' 
                      : 'text-white hover:text-yellow-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.label}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              );
            })}
          </nav>

          <motion.button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 140, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Book Visit
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
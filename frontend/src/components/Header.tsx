import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Home, Phone, Star, Users, MapPin } from 'lucide-react';
import logo from '../assets/weblogo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsProjectsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsProjectsOpen(false);
    }
  };

  const navItems = [
    { id: '/', label: 'Home', icon: Home, type: 'route' },
    { id: 'Projects', label: 'Projects', icon: Star, type: 'dropdown' },
    { id: '/about', label: 'About', icon: MapPin, type: 'route' },
    { id: '/partners', label: 'Partners', icon: Users, type: 'route' },
    { id: '/contact-us', label: 'Contact', icon: Phone, type: 'route' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2"
          >
            <img
              src={logo}
              alt="Krishna Bhumi Logo"
              className="w-10 h-10 object-contain rounded-full"
            />
            <span
              className={`text-2xl font-bold ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
               <span className='text-orange-500'>Krishna Bhumi</span>
            </span>
          </button>

          {/* Nav Items */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;

              if (item.type === 'dropdown') {
                return (
                  <div
                    key={item.id}
                    ref={dropdownRef}
                    className="relative"
                  >
                    <motion.button
                      onClick={() => setIsProjectsOpen((prev) => !prev)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                        isScrolled
                          ? 'text-gray-700 hover:text-orange-600'
                          : 'text-white hover:text-yellow-300'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{item.label}</span>
                    </motion.button>

                    {/* Dropdown */}
                    {isProjectsOpen && (
                      <div className="absolute top-full mt-2 bg-white shadow-md rounded-lg py-2 w-40 z-50">
                        <button
                          onClick={() => scrollToSection('Resident')}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                        >
                          Resident
                        </button>
                        <button
                          onClick={() => scrollToSection('Commercial')}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                        >
                          Commercial
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <motion.button
                  key={item.id}
                  onClick={() => navigate(item.id)}
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

          {/* CTA Button */}
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(255, 140, 0, 0.3)',
            }}
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
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowUp, Heart, Bot as Lotus } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, color: 'hover:text-blue-500', url: '#' },
    { icon: Twitter, color: 'hover:text-blue-400', url: '#' },
    { icon: Instagram, color: 'hover:text-pink-500', url: '#' },
    { icon: Youtube, color: 'hover:text-red-500', url: '#' },
  ];

  const quickLinks = [
    { label: 'About Us', href: '#experience' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-500/10 to-pink-500/10 rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating spiritual elements */}
      <motion.div
        className="absolute top-20 right-20 w-6 h-6 text-yellow-400 opacity-30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Lotus className="w-full h-full" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Home className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold">Krishna Bhumi</span>
            </motion.div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Where divine living meets modern comfort. Experience the sacred lifestyle of Vrindavan in our thoughtfully designed spiritual community.
            </p>

            <motion.div
              className="flex items-center space-x-2 text-yellow-400"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-5 h-5" />
              <span className="text-sm">Made with devotion in Vrindavan</span>
              <Heart className="w-5 h-5" />
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    />
                    <span>{link.label}</span>
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Contact Info</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-center space-x-3 text-gray-300"
                whileHover={{ x: 5, color: '#ffffff' }}
              >
                <Phone className="w-5 h-5 text-orange-500" />
                <span>+91 98765 43210</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3 text-gray-300"
                whileHover={{ x: 5, color: '#ffffff' }}
              >
                <Mail className="w-5 h-5 text-orange-500" />
                <span>info@krishnabhumi.com</span>
              </motion.li>
              <motion.li 
                className="flex items-start space-x-3 text-gray-300"
                whileHover={{ x: 5, color: '#ffffff' }}
              >
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
                <span>Vrindavan, Mathura<br />Uttar Pradesh, India</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-6 mb-4 sm:mb-0">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  className={`text-gray-400 ${social.color} transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.2,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }
                  }}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>

          <motion.p
            className="text-gray-400 text-center"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            © 2025 Krishna Bhumi. All rights reserved.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 25px rgba(255, 140, 0, 0.4)",
        }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
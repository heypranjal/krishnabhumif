import  { useState, useEffect } from 'react';
import { Home, Phone, Star, Users, MapPin, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const logo = "https://i.ibb.co/HLvdRBkZ/weblogo-copy.png";

// Image URLs
const DEFAULT_IMAGE = "https://i.ibb.co/3pJZBWD/sample-project.jpg";
const RESIDENTIAL_IMAGE = "https://i.ibb.co/vXQ4ScM/residential.jpg";
const COMMERCIAL_IMAGE = "https://i.ibb.co/tPZ8mTJ/commercial.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<'default' | 'residential' | 'commercial'>('default');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: '/', label: 'Home', icon: Home, type: 'route' },
    { id: 'Projects', label: 'Projects', icon: Star, type: 'dropdown' },
    { id: '/about', label: 'About', icon: MapPin, type: 'route' },
    { id: '/partners', label: 'Partners', icon: Users, type: 'route' },
    { id: '/contact-us', label: 'Contact', icon: Phone, type: 'route' },
  ];

  const getImage = () => {
    switch (hoveredItem) {
      case 'residential': return RESIDENTIAL_IMAGE;
      case 'commercial': return COMMERCIAL_IMAGE;
      default: return DEFAULT_IMAGE;
    }
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button onClick={() => handleNavigation('/')} className="flex items-center space-x-2 z-50">
            <img src={logo} alt="Krishna Bhumi Logo" className="w-14 h-14 object-contain rounded-full" />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              <span className='text-yellow-400'>Krishna Bhumi</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;

              if (item.type === 'dropdown') {
                return (
                  <div
                    key={item.id}
                    className="relative group"
                    onMouseEnter={() => { setHoveredItem('default'); setIsDropdownOpen(true); }}
                    onMouseLeave={() => { setIsDropdownOpen(false); }}
                  >
                    <button className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-yellow-300'}`}>
                      <IconComponent className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>

                    {/* Dropdown with animation */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -20, scaleY: 0 }}
                          animate={{ opacity: 1, y: 0, scaleY: 1 }}
                          exit={{ opacity: 0, y: -20, scaleY: 0 }}
                          transition={{ duration: 0.75, ease: 'easeInOut' }}
                          className="absolute top-full mt-2 left-0 bg-white/90 backdrop-blur-lg shadow-lg rounded-xl p-4 flex space-x-6 origin-top z-50"
                        >
                          <div className="flex flex-col space-y-2 w-48">
                            <button
                              onClick={() => handleNavigation('/residential')}
                              onMouseEnter={() => setHoveredItem('residential')}
                              className="w-full text-left px-4 py-2 hover:bg-orange-100 rounded-md text-gray-700 font-medium transition-all"
                            >
                              Residential
                            </button>
                            <button
                              onClick={() => handleNavigation('/commercial')}
                              onMouseEnter={() => setHoveredItem('commercial')}
                              className="w-full text-left px-4 py-2 hover:bg-orange-100 rounded-md text-gray-700 font-medium transition-all"
                            >
                              Commercial
                            </button>
                          </div>

                          {/* Dynamic Image */}
                          <div className="w-72 h-48 rounded-lg overflow-hidden shadow-lg border border-gray-300">
                            <motion.img
                              key={hoveredItem}
                              src={getImage()}
                              alt="Projects Preview"
                              className="object-cover w-full h-full"
                              initial={{ opacity: 0.5, scale: 1.05 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button key={item.id} onClick={() => handleNavigation(item.id)} className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 relative group hover:scale-105 ${isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-yellow-300'}`}>
                  <IconComponent className="w-4 h-4" />
                  <span>{item.label}</span>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <button onClick={() => handleNavigation('/contact-us')} className="hidden md:block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            Book Visit
          </button>

          {/* Mobile Menu */}
          <button className={`md:hidden p-2 rounded-lg transition-all duration-300 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            {isDropdownOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

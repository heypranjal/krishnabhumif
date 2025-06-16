import React, { useState, useEffect, useRef } from 'react';
import { Home, Phone, Star, Users, MapPin, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const logo = "https://i.ibb.co/HLvdRBkZ/weblogo-copy.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsProjectsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsProjectsOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
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
      setIsMobileMenuOpen(false);
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
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-2 z-50"
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

          {/* Desktop Nav Items */}
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
                    <button
                      onClick={() => setIsProjectsOpen((prev) => !prev)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                        isScrolled
                          ? 'text-gray-700 hover:text-orange-600'
                          : 'text-white hover:text-yellow-300'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>

                    {/* Desktop Dropdown */}
                    {isProjectsOpen && (
                      <div className="absolute top-full mt-2 bg-white shadow-md rounded-lg py-2 w-40 z-50">
                        <button
                          onClick={() => handleNavigation('/residential')}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                        >
                          Residential
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
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 relative group hover:scale-105 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-orange-600'
                      : 'text-white hover:text-yellow-300'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.label}</span>
                  <div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  />
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <button
            onClick={() => handleNavigation('/contact-us')}
            className="hidden md:block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            style={{
              boxShadow: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 140, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Book Visit
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-200 transform transition-all duration-300"
          >
            <nav className="py-4 px-4 space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;

                if (item.type === 'dropdown') {
                  return (
                    <div key={item.id} className="space-y-2">
                      <button
                        onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
                      >
                        <div className="flex items-center space-x-2">
                          <IconComponent className="w-5 h-5" />
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <div className={`transform transition-transform duration-200 ${isProjectsOpen ? 'rotate-180' : ''}`}>
                          ▼
                        </div>
                      </button>

                      {/* Mobile Dropdown Items */}
                      {isProjectsOpen && (
                        <div className="pl-6 space-y-1 transform transition-all duration-200">
                          <button
                            onClick={() => handleNavigation('/residential')}
                            className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                          >
                            Residential
                          </button>
                          <button
                            onClick={() => scrollToSection('Commercial')}
                            className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                          >
                            Commercial
                          </button>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className="w-full flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}

              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <button
                  onClick={() => handleNavigation('/contact-us')}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Book Visit
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
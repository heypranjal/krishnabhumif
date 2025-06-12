import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Radha Devi",
      role: "Yoga Instructor",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Living in Krishna Bhumi has transformed my spiritual journey. The peaceful environment and divine atmosphere make every day feel like a blessing.",
      rating: 5
    },
    {
      name: "Gopal Sharma",
      role: "Retired Teacher",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "The perfect blend of modern amenities and spiritual living. Our family has found true peace and happiness here in this sacred community.",
      rating: 5
    },
    {
      name: "Meera Patel",
      role: "Artist",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Krishna Bhumi is more than just a residence; it's a way of life. The community spirit and devotional atmosphere inspire me every single day.",
      rating: 5
    },
    {
      name: "Arjun Krishna",
      role: "IT Professional",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Moving to Krishna Bhumi was the best decision for our family. The children love the environment, and we've found our spiritual home.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background with feather image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/src/assets/feather.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0" />
      </motion.div>

      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-10"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-200 to-pink-200 rounded-full opacity-10"
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What Our <span className="text-orange-600">Residents</span> Say
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover why families choose Krishna Bhumi as their spiritual home and sanctuary
          </motion.p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="flex justify-center items-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Navigation buttons */}
            <motion.button
              onClick={prevTestimonial}
              className="absolute left-0 z-10 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-orange-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="absolute right-0 z-10 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-orange-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Testimonial Cards */}
            <div className="w-full max-w-4xl mx-auto px-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl relative"
                >
                  {/* Quote icon */}
                  <motion.div
                    className="absolute -top-4 left-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full p-3"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Quote className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Stars */}
                  <motion.div 
                    className="flex justify-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Testimonial text */}
                  <motion.p
                    className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.p>

                  {/* Author info */}
                  <motion.div
                    className="flex items-center justify-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-gradient-to-r from-orange-400 to-yellow-400"
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full border-4 border-orange-400 opacity-0"
                        animate={{
                          opacity: [0, 0.5, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                    <div className="text-center">
                      <h4 className="font-bold text-gray-800 text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-orange-600 font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-orange-600 w-8' 
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 140, 0, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join Our Community
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
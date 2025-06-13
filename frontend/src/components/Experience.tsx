import React from 'react';
import { motion } from 'framer-motion';
import Lotus from '../assets/logoimage13.png'; // Fixed import
import Heart from '../assets/logoimage14.png';
import Home from '../assets/logoimage15.png';
import Shield from '../assets/logoimage16.png'; // Fixed import

const Experience = () => {
  const experiences = [
    {
      icon: Lotus,
      title: "Divine Connection",
      description: "Experience spiritual awakening in the sacred land of Lord Krishna, where every moment is blessed with divine presence."
    },
    {
      icon: Heart,
      title: "Peaceful Lifestyle",
      description: "Embrace tranquility and inner peace in our serene community, away from the chaos of modern city life."
    },
    {
      icon: Home,
      title: "Modern Living",
      description: "Enjoy contemporary amenities and luxurious comforts while staying connected to your spiritual roots."
    },
    {
      icon: Shield,
      title: "Sacred Security",
      description: "Live with complete peace of mind in our secure, gated community designed for spiritual seekers."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      {/* Parallax background with feather image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/src/assets/feather.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#003049]" />
      </motion.div>

      {/* Floating spiritual elements */}
      <motion.div
        className="absolute top-20 left-10 w-8 h-8 text-yellow-300 opacity-30"
        animate={{
          rotate: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <img src={Lotus} alt="Lotus" className="w-full h-full object-contain" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-16 w-6 h-6 text-orange-300 opacity-40"
        animate={{
          rotate: [360, 0],
          y: [0, -15, 0],
        }}
        transition={{
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
      >
        <img src={Heart} alt="Heart" className="w-full h-full object-contain" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience Life in{" "}
            <span className="text-yellow-300">Krishna Bhumi</span>
          </motion.h2>
          <motion.p
            className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Immerse yourself in a unique lifestyle where spirituality and modern
            comfort create perfect harmony
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((experience, index) => {
            return (
              <motion.div key={index} variants={itemVariants} className="group">
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/20 hover:border-yellow-300/50 transition-all duration-500"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="mb-6 flex justify-center"
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Circular container */}
                    <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <img src={experience.icon} alt={experience.title} className="w-full h-full object-cover" />
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-bold text-white mb-4 text-center group-hover:text-yellow-300 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    {experience.title}
                  </motion.h3>

                  <motion.p
                    className="text-amber-100 text-center leading-relaxed group-hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                    viewport={{ once: true }}
                  >
                    {experience.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 140, 0, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById("amenities");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Discover Our Amenities
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

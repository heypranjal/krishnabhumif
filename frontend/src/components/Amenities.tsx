import { motion } from 'framer-motion';
import temple from "../assets/logoimage1.png";  // Ensure this path is correct
import yoga from "../assets/logoimage2.png";  // Ensure this path is correct
import garden from "../assets/logoimage3.png";  // Ensure this path is correct
import security from "../assets/logoimage4.png";  // Ensure this path is correct
import parking from "../assets/logoimage5.png";  // Ensure this path is correct
import fitness from "../assets/logoimage6.png";  // Ensure this path is correct
import community from "../assets/logoimage7.png";  // Ensure this path is correct
import pool from "../assets/logoimage8.png";  // Ensure this path is correct
import flower from "../assets/logoimage9.png";  // Ensure this path is correct
import cafe from "../assets/logoimage10.png";  // Ensure this path is correct
import play from "../assets/logoimage11.png";  // Ensure this path is correct
import power from "../assets/logoimage12.png";  // Ensure this path is correct

const Amenities = () => {
  const amenities = [
    {
      icon: temple,
      title: "Sacred Temple",
      description: "Beautiful Krishna temple for daily prayers and spiritual gatherings",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: yoga,
      title: "Yoga & Meditation Zone",
      description: "Peaceful spaces for yoga practice and meditation sessions",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: garden,
      title: "Lush Gardens",
      description: "Beautifully landscaped gardens with native plants and flowers",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: security,
      title: "24/7 Security",
      description: "Round-the-clock security with modern surveillance systems",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: parking,
      title: "Covered Parking",
      description: "Secure covered parking for all residents",
      color: "from-indigo-400 to-purple-500"
    },
    {
      icon: fitness,
      title: "Fitness Center",
      description: "Modern gym with state-of-the-art equipment",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: community,
      title: "Community Hall",
      description: "Spacious hall for celebrations and community events",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: pool,
      title: "Swimming Pool",
      description: "Crystal clear swimming pool with relaxation area",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: flower,
      title: "Flower Gardens",
      description: "Dedicated spaces for growing flowers for temple offerings",
      color: "from-pink-400 to-rose-l"
    },
    {
      icon: cafe,
      title: "Café & Restaurant",
      description: "Pure vegetarian dining with traditional Krishna cuisine",
      color: "from-amber-400 to-yellow-500"
    },
    {
      icon: play,
      title: "Children's Play Area",
      description: "Safe and fun playground for children of all ages",
      color: "from-purple-400 to-violet-500"
    },
    {
      icon: power,
      title: "Power Backup",
      description: "Uninterrupted power supply with backup generators",
      color: "from-yellow-500 to-amber-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="amenities" className="py-20 relative overflow-hidden">
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
        <div className="absolute inset-0 bg-transparent" />
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 bg-orange-200 rounded-full opacity-30"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            World-Class <span className="text-orange-500">Amenities</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Experience luxury and comfort with our thoughtfully designed amenities that cater to your spiritual and modern lifestyle needs
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full"
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="mb-4 flex justify-center"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Circular container */}
                  <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {/* Render image icon */}
                    <img src={amenity.icon} alt={amenity.title} className="w-full h-full object-cover" />
                  </div>
                </motion.div>
                
                <motion.h3
                  className="text-lg font-bold text-gray-800 mb-3 text-center group-hover:text-orange-600 transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {amenity.title}
                </motion.h3>
                
                <motion.p
                  className="text-gray-600 text-center text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {amenity.description}
                </motion.p>

                {/* Glowing border effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(45deg, transparent, rgba(255, 140, 0, 0.1), transparent)`,
                    pointerEvents: 'none',
                  }}
                  animate={{
                    background: [
                      "linear-gradient(0deg, transparent, rgba(255, 140, 0, 0.1), transparent)",
                      "linear-gradient(360deg, transparent, rgba(255, 140, 0, 0.1), transparent)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 69, 0, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 4px 15px rgba(255, 69, 0, 0.2)",
                "0 8px 25px rgba(255, 69, 0, 0.3)",
                "0 4px 15px rgba(255, 69, 0, 0.2)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
            onClick={() => {
              const element = document.getElementById('testimonials');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See What Residents Say
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Amenities;

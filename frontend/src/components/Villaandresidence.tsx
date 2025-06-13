import { motion } from 'framer-motion';
import villa1 from "../assets/logoimage1.png";  // Ensure this path is correct
import villa2 from "../assets/logoimage10.png";  // Ensure this path is correct
import apartment1 from "../assets/logoimage16.png";  // Ensure this path is correct
import apartment2 from "../assets/logoimage15.png";  // Ensure this path is correct

const KrishnaBhumi = () => {
  const villas = [
    {
      icon: villa1,
      title: "Shyam Kutir",
      description: "A 3-5 bedroom luxury duplex villa designed for comfort and elegance.",
      size: "1399 - 4306 sq.ft",
      color: "from-indigo-400 to-purple-500"
    },
    {
      icon: villa2,
      title: "Gopal Kutir",
      description: "A spacious villa with a luxurious living experience.",
      size: "1399 - 4306 sq.ft",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const apartments = [
    {
      icon: apartment1,
      title: "1 BHK",
      description: "Elegant 1 BHK apartment overlooking lush greenery.",
      size: "887 sq.ft",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: apartment2,
      title: "2 BHK",
      description: "Sophisticated 2 BHK apartments with modern finishes.",
      size: "1200 sq.ft",
      color: "from-pink-400 to-rose-l"
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
    <section id="krishnabhumi" className="py-20 relative overflow-hidden">
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
            Krishna Bhumi <span className="text-orange-500">Living</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Minimalism and luxury come together to strike the perfect balance. Krishna Bhumi is a haven of peace and comfort cradled in nature, enhanced by all amenities of a sophisticated lifestyle.
          </motion.p>
        </motion.div>

        {/* Villas Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-semibold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Villas at Krishna Bhumi
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {villas.map((villa, index) => (
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
                      <img src={villa.icon} alt={villa.title} className="w-full h-full object-cover" />
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-lg font-bold text-gray-800 mb-3 text-center group-hover:text-orange-600 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {villa.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 text-center text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    {villa.description} ({villa.size})
                  </motion.p>

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
        </motion.div>

        {/* Apartments Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-semibold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Apartments at Krishna Bhumi
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {apartments.map((apartment, index) => (
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
                      <img src={apartment.icon} alt={apartment.title} className="w-full h-full object-cover" />
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-lg font-bold text-gray-800 mb-3 text-center group-hover:text-orange-600 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {apartment.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 text-center text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    {apartment.description} ({apartment.size})
                  </motion.p>

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
        </motion.div>
      </div>
    </section>
  );
};

export default KrishnaBhumi;

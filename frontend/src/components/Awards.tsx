import { motion } from 'framer-motion';
import { useState } from 'react';
// const featherImage = "https://i.ibb.co/pj3ndCj6/feather-copy.png";

const Awards = () => {
  const [showAll, setShowAll] = useState(false);

  const awards = [
    {
      title: "Golden Brick Awards Dubai",
      year: "2017",
      description: "International recognition for excellence in real estate development",
      color: "from-yellow-400 to-amber-500"
    },
    {
      title: "Credai National CSR Award",
      year: "2017",
      description: "Recognition for outstanding corporate social responsibility initiatives",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Credai Bengal Realty Award",
      year: "2017",
      description: "Excellence in regional real estate development",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "ACEF Grand Prix Award",
      year: "2017",
      description: "Recognition for marketing excellence and innovation",
      color: "from-purple-400 to-violet-500"
    },
    {
      title: "Realty Plus Excellence Awards East",
      year: "2017",
      description: "Outstanding achievement in Eastern India real estate",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "ACEF Social Impact Award",
      year: "2017",
      description: "Recognition for positive social impact through business",
      color: "from-teal-400 to-cyan-500"
    },
    {
      title: "Realty Plus Excellence Awards North",
      year: "2017",
      description: "Outstanding achievement in Northern India real estate",
      color: "from-pink-400 to-rose-500"
    },
    {
      title: "ACEF Capability Award",
      year: "2017",
      description: "Recognition for organizational capabilities and excellence",
      color: "from-indigo-400 to-blue-500"
    },
    {
      title: "Kolkata Real Estate Leadership Awards",
      year: "2017",
      description: "Leadership excellence in Kolkata real estate sector",
      color: "from-gray-600 to-gray-800"
    },
    {
      title: "EKDKN Eminent Award",
      year: "2017",
      description: "Recognition for eminence in business and development",
      color: "from-emerald-400 to-green-500"
    },
    {
      title: "Credai Crisil Best Commercial Project",
      year: "2014",
      description: "Excellence in commercial project development",
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "PRSI National Award",
      year: "2014",
      description: "Recognition for public relations excellence",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "CMA Excellence Awards for Public Service",
      year: "2014",
      description: "Excellence in public service initiatives",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "India Sustainability Leadership Awards",
      year: "2016",
      description: "Leadership in sustainable green IT infrastructure",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Realty Plus Excellence Award for CSR",
      year: "2013",
      description: "Excellence in corporate social responsibility",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Rotary Sampreeti Award",
      year: "2013",
      description: "Recognition for community service and development",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const displayedAwards = showAll ? awards : awards.slice(0, 4);

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
    <section id="awards" className="py-8 relative overflow-hidden">
      {/* Background with feather image */}
      {/* <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${featherImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-transparent" />
      </motion.div> */}

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
            Awards & <span className="text-yellow-500">Recognition</span>
          </motion.h2>
          <motion.p
            className="text-xl text-white max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Celebrating our achievements and industry recognition for excellence in real estate development and corporate responsibility
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {displayedAwards.map((award, index) => (
            <motion.div
              key={`${award.title}-${index}`}
              variants={itemVariants}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                  {/* Award icon */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${award.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.div>
                
                <motion.div
                  className="text-center mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {award.year}
                  </span>
                </motion.div>
                
                <motion.h3
                  className="text-lg font-bold text-gray-800 mb-3 text-center group-hover:text-orange-600 transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {award.title}
                </motion.h3>
                
                <motion.p
                  className="text-gray-600 text-center text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {award.description}
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
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 mr-4"
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
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>
                View Less
                <svg className="w-5 h-5 ml-2 inline transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            ) : (
              <>
                View More
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
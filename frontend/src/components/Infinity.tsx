import { motion } from 'framer-motion';
const featherImage = "https://i.ibb.co/pj3ndCj6/feather-copy.png";

const highlights = [
  {
    title: "Industry Leadership",
    description: "Specializes in townships, mixed-use developments, and tech parks shaping India's urban future.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Sustainable Vision",
    description: "A pioneer in green building practices that promote healthy and eco-friendly living environments.",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Innovation Hub",
    description: "Creator of the iconic Infinity Think Tank – the first intelligent IT workspace in Salt Lake Sector-V, Kolkata.",
    color: "from-yellow-500 to-orange-600",
  },
];

const keyFeatures = [
  {
    title: "IT Hub Development",
    description: "Largest IT hub in Eastern India",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Customer Focus",
    description: "Superior service excellence",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Green Buildings",
    description: "Sustainable development",
    color: "from-teal-500 to-green-600",
  },
  {
    title: "Urban Impact",
    description: "Transforming cityscapes",
    color: "from-gray-600 to-gray-800",
  },
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

const InfinityGroup = () => {
  return (
    <section id="infinity-group" className="py-10  relative overflow-hidden">
      {/* Background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${featherImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 60,
        }}
      >
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Content container with rounded background */}
        <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* Header Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <motion.h1
                  className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className='text-white'>Infinity</span> <span className='text-orange-500'>Group</span>
                  <div className="h-1 w-20 bg-orange-500 mt-2"></div>
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-700 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  A prominent player in the real estate and urban development sector, focusing on sustainable and green building practices.
                </motion.p>
              </motion.div>

              {/* Main Sections */}
              <motion.div
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {highlights.map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="border-l-4 border-orange-500 pl-6 py-2">
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group">
                  Visit Infinity Group
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </motion.div>
            </div>

            {/* Right Column - Features and Image */}
            <div className="space-y-8">
              {/* Key Features Grid */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {keyFeatures.map((feature, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="bg-orange-50/60 rounded-lg p-4 text-center hover:bg-orange-100/60 transition-colors duration-300 border border-orange-200/50">
                      <h3 className="text-orange-600 font-bold text-sm mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Hero Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-white/20 rounded-lg aspect-square flex items-center justify-center"
                        >
                          <div className="bg-white/30 rounded w-8 h-8"></div>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm opacity-90">Modern Office Buildings</p>
                    <p className="text-xs opacity-75 mt-1">Sustainable Architecture</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfinityGroup;
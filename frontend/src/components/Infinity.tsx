import { motion } from 'framer-motion';
const infinityimg = "https://i.ibb.co/bjz6mC05/infinity.png" ;


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
    opacity: 5,
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
    <section id="infinity-group" className="py-10 relative overflow-hidden">
      {/* Background image */}
      {/* <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${featherImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 2,
        }}
      /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section - Centered */}
        <motion.div
          className="text-center mb-16"
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
            <span className='text-white'>Infinity</span> <span className='text-yellow-500'>Group</span>
          </motion.h1>
          <div className="h-1 w-20 bg-orange-500 mx-auto mb-6"></div>
          <motion.p
            className="text-xl text-white leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A prominent player in the real estate and urban development sector, focusing on sustainable and green building practices.
          </motion.p>
        </motion.div>

        {/* Main Content - Vertical Stack */}
        <div className="space-y-16">
          {/* Highlights Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {highlights.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-white/60 rounded-2xl p-8 shadow-xl border border-white/30 hover:bg-white/90 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Visual Element */}
<motion.div
  className="relative rounded-2xl overflow-hidden shadow-2xl max-w-xl mx-auto"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.4 }}
  viewport={{ once: true }}
>
  <div className="relative w-full h-auto">
    <img 
      src={infinityimg} 
      alt="Modern Office Buildings" 
      className="w-full h-auto rounded-2xl"
    />
    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
      {/* overlay */}
    </div>
  </div>
</motion.div>


          {/* Key Features Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {keyFeatures.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-orange-50/90 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-orange-100/90 transition-colors duration-300 border border-orange-200/50 shadow-lg">
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

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto group">
              Visit Infinity Group
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfinityGroup;
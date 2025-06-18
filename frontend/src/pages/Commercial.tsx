import { motion } from 'framer-motion';
const heroImage = "https://i.ibb.co/LhqVWQvk/hero-copy.jpg";
const featherImage = "https://i.ibb.co/pj3ndCj6/feather-copy.png";


const KrishnaBhumiArcadeRetail = () => {
  return (

   <>
    {/* Hero Section */}
      <div
        className="relative w-full h-[105vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Commercial <span className="text-yellow-400">Properties</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
Premium retail and office spaces in prime locations            </p>
          </div>
        </div>
      </div>
      
    <section id="arcade-retail" className="py-20 relative overflow-hidden">
      {/* Background with feather image */}
      {/* <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${featherImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-transparent" />
      </motion.div> */}

      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 bg-orange-200 rounded-full opacity-30"
        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Krishna Bhumi <span className="text-yellow-500">Arcade Retail</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Premium Retail Spaces in Vrindavan offering 24/7 operations, modern infrastructure, and prime locations for your business to thrive.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 69, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 4px 15px rgba(255, 69, 0, 0.2)",
                "0 8px 25px rgba(255, 69, 0, 0.3)",
                "0 4px 15px rgba(255, 69, 0, 0.2)"
              ],
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20"
            whileHover={{ boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)" }}
          >
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">Prime Location</h3>
            <p className="text-gray-700 leading-relaxed">
              Strategically located properties with excellent connectivity and visibility.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20"
            whileHover={{ boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)" }}
          >
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">Modern Infrastructure</h3>
            <p className="text-gray-700 leading-relaxed">
              State-of-the-art facilities with modern amenities and security features.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20"
            whileHover={{ boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)" }}
          >
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">Professional Management</h3>
            <p className="text-gray-700 leading-relaxed">
              24/7 facility management and maintenance services.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
   </>
  );
};

export default KrishnaBhumiArcadeRetail;
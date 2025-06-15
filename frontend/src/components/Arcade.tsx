import { motion } from 'framer-motion';
import arcadeImage from '../assets/feather.jpeg'; // Replace with your actual image path

const KrishnaBhumiArcade = () => {
  const features = [
    { label: "Premium", value: "Premium Retail Spaces" },
    { label: "Seamless", value: "Shopping Express" },
    { label: "Prime", value: "Location on main Chhatikara Road" },
    { label: "Secure", value: "Parking Space" },
  ];

  return (
    <section id="arcade" className="py-20 relative overflow-hidden bg-white-60">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${arcadeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 100,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        

        <motion.div
          className="bg-white/30 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-gray-100"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white/100 mb-4">
            Krishna Bhumi <span className="text-orange-500">Arcade</span>
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            A premium retail destination where luxury meets convenience. Experience a curated selection of high-end boutiques, fine dining restaurants, and entertainment venues.
          </p>
        </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                className="p-4 text-center rounded-xl group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-orange-500 text-2xl font-bold mb-2 group-hover:text-red-500 transition-colors duration-300">
                  {item.label}
                </div>
                <p className="text-gray-700 text-sm font-medium group-hover:text-gray-900 transition-colors duration-300">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Retail Opportunities
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KrishnaBhumiArcade;

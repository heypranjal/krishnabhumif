import { motion } from 'framer-motion';
import { useState } from 'react';

const CSRSection = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Placeholder for CSR partner images - replace with actual image URLs
  const csrImages = [
    {
      id: 1,
      src: "https://i.ibb.co/nsdb6bys/S1.png",
      alt: "CSR Partner 1"
    },
    {
      id: 2,
      src: "https://i.ibb.co/KjhJTYsR/s2.png",
      alt: "CSR Partner 2"
    },
    {
      id: 3,
      src: "https://i.ibb.co/6cr7Sc0q/s4.png",
      alt: "CSR Partner 3"
    },
    {
      id: 4,
      src: "https://i.ibb.co/qYmw5gXy/s3.png",
      alt: "CSR Partner 4"
    },
    {
      id: 5,
      src: "https://i.ibb.co/21MdfKjV/s6.png",
      alt: "CSR Partner 5"
    },
    {
      id: 6,
      src: "https://i.ibb.co/9kptJxx2/s5.png",
      alt: "CSR Partner 6"
    },
    {
      id: 7,
      src: "https://i.ibb.co/6RQZWyr9/S7.png",
      alt: "CSR Partner 7"
    },
    {
      id: 8,
      src: "https://i.ibb.co/mrnNPWC9/S8.png",
      alt: "CSR Partner 8"
    },
    {
      id: 9,
      src: "https://i.ibb.co/4n0Nr3KZ/S9.png",
      alt: "CSR Partner 9"
    },
    {
      id: 10,
      src: "https://i.ibb.co/7dM2fSdm/s10.png",
      alt: "CSR Partner 10"
    },
    {
      id: 11,
      src: "https://i.ibb.co/VcHCCF36/S11.png",
      alt: "CSR Partner 11"
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="csr" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-green-200 rounded-full opacity-20"
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
        className="absolute bottom-20 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-30"
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
            Corporate Social <span className="text-yellow-500">Responsibility</span>
          </motion.h2>
          <motion.p
            className="text-xl text-white max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Partnering with leading organizations to create positive social impact and build a better tomorrow for our communities
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {csrImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedImageIndex(index)}
            >
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="overflow-hidden rounded-lg"
                  whileHover={{ 
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-24 object-cover group-hover:brightness-110 transition-all duration-300"
                  />
                </motion.div>

                {/* Simple glowing border effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(45deg, transparent, rgba(34, 197, 94, 0.1), transparent)`,
                    pointerEvents: 'none',
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
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 4px 15px rgba(34, 197, 94, 0.2)",
                "0 8px 25px rgba(34, 197, 94, 0.3)",
                "0 4px 15px rgba(34, 197, 94, 0.2)",
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
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join Our CSR Initiatives
          </motion.button>
        </motion.div>
      </div>

      {/* Modal for selected image */}
      {selectedImageIndex !== null && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImageIndex(null)}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 max-w-lg w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                CSR Initiative
              </h3>
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <img
              src={csrImages[selectedImageIndex].src}
              alt={csrImages[selectedImageIndex].alt}
              className="w-full h-64 object-cover rounded-xl"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default CSRSection;
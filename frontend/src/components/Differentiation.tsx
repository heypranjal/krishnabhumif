import { motion } from "framer-motion";
import featherImage from "../assets/feather.jpeg";

// Replace these with your actual icons
import spiritual from "../assets/logoimage1.png";
import access from "../assets/logoimage1.png";
import architecture from "../assets/logoimage1.png";
import wellness from "../assets/logoimage1.png";
import eldercare from "../assets/logoimage1.png";
import green from "../assets/logoimage1.png";
import infra from "../assets/logoimage1.png";

const differentiators = [
  {
    icon: spiritual,
    title: "Spiritual Significance",
    subtitle: "Located at the Feet of Divinity",
    description: "Residences at the base of the world's tallest Krishna temple – Vrindavan Chandrodaya Mandir (700 ft).",
  },
  {
    icon: access,
    title: "Divine Access",
    subtitle: "Exclusive Temple Access",
    description: "Dedicated entrance and priority queuing during festivals for residents – a seamless spiritual connection.",
  },
  {
    icon: architecture,
    title: "Architectural Excellence",
    subtitle: "World-Class Design Standards",
    description: "Premium villas and apartments offering panoramic views – a harmony of tradition and luxury.",
  },
  {
    icon: wellness,
    title: "Holistic Wellness",
    subtitle: "Spa & Ayurvedic Treatments",
    description: "In-community spa and Ayurvedic center for rejuvenation that complements spiritual growth.",
  },
  {
    icon: eldercare,
    title: "Elder Care",
    subtitle: "Comprehensive Medical Support",
    description: "On-call doctors, nurses, diagnostics & wheelchair-accessible infrastructure for peace of mind.",
  },
  {
    icon: green,
    title: "Green Living",
    subtitle: "Vast Natural Surroundings",
    description: "Expansive green zones and outdoor spaces rooted in Vrindavan’s serene and spiritual environment.",
  },
  {
    icon: infra,
    title: "Community Infrastructure",
    subtitle: "Complete Modern Amenities",
    description: "Everything from gyms and pools to stores and laundromats – a fully self-contained township.",
  }
];

const KrishnaBhumiDifferentiation = () => {
  return (
    <section id="differentiation" className="py-10 relative overflow-hidden">
      {/* Feather background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${featherImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 60,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="  rounded-3xl bg-white/30 backdrop-blur-sm  shadow-2xl p-10 sm:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-10 text-white">
            Key Definition of <span className="text-orange-500">Krishna Bhumi</span>
          </h2>
          <p className="text-lg text-center text-black mb-12">
            Experience a unique blend of spiritual serenity and modern luxury
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <img src={item.icon} alt={item.title} className="w-14 h-14 object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-orange-600 text-center mb-1">{item.title}</h3>
                <h4 className="text-md text-gray-800 font-medium text-center mb-2">{item.subtitle}</h4>
                <p className="text-sm text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KrishnaBhumiDifferentiation;

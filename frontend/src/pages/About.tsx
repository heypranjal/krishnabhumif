import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpeg";
const govardhan = "https://i.ibb.co/gbj8ZZq0/govardhan.png";
const tulsi = "https://i.ibb.co/Y4H9kjfm/Tulsi-Vaas.png" 
const yamuna = "https://i.ibb.co/MDdJ64gr/Yamuna-Vaas.png"
const featherImage = "https://i.ibb.co/pj3ndCj6/feather-copy.png";
import {
  CheckCircle,
  Leaf,
  Users,
  Award,
  Building,
  Heart,
  Lightbulb,
} from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[807px] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4">
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            About <span className="text-orange-500">Krishna Bhumi</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Where spiritual heritage meets contemporary living
          </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Sections with featherImage background */}
      <div
        className="relative text-gray-900"
        style={{
           backgroundImage: `url(${featherImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 60,
        }}
      >
        <div className="absolute inset-0 bg-white/10" />
        <div className="relative z-10">

          {/* Introduction Section */}
          <section className="py-16 px-4 max-w-7xl mx-auto  rounded-xl text-black mb-10">
            <motion.p
              className="text-lg leading-relaxed text-center"
              initial={{ opacity: 10 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Nestled in the sacred city of Vrindavan along the strategic Chhatikara Road,
              Krishna Bhumi represents the culmination of Infinity Group’s vision to
              create transformative living spaces that honor both tradition and innovation.
              As an <span className="text-yellow-600 font-semibold">IGBC Gold-rated </span>
              development, it stands as a testament to our commitment to sustainable and
              environmentally conscious construction.
            </motion.p>
          </section>

{/* updated residential phase section */}


<section className="py-16 px-4 max-w-7xl mx-auto rounded-xl mb-10">
  <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
    <span className="text-white">Our</span> <span className="text-orange-500">Residential Phases</span>
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[{
      title: "Govardhan Vaas",
      desc: "Our first phase of premium residences, already delivered and home to a thriving community.",
      img: govardhan,
      badge: "Delivered"
    }, {
      title: "Tulsi Vaas",
      desc: "The next phase of our residential development, bringing new living possibilities.",
      img: tulsi,
      badge: "Upcoming"
    }, {
      title: "Yamuna Vaas",
      desc: "Our future residential phase, promising an elevated living experience.",
      img: yamuna,
      badge: "Upcoming"
    }].map((item, i) => (
      <motion.div
        key={item.title}
        className="relative h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 group"
        style={{
          backgroundImage: `url(${item.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2 }}
      >
        {/* Badge positioned at top-right */}
        {/* <div className="absolute top-4 right-4 z-20">
          <span className="bg-green-200 text-green-800 text-xs font-medium px-3 py-1 rounded-full shadow-lg">
            {item.badge}
          </span>
        </div> */}
        
        {/* Blurred overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 left-0 right-0  p-4">
            <h3 className="text-lg font-bold text-white mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-white/90 line-clamp-2">
              {item.desc}
            </p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>
          {/* Pillars Section */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 py-12 bg-white/10 backdrop-blur-sm rounded-xl shadow-md mb-10">
            {[{
              title: "Our Legacy",
              icon: <Award className="w-12 h-12 text-orange-500" />,
              text: "Building upon decades of pioneering green building development in India."
            }, {
              title: "Sustainability",
              icon: <Leaf className="w-12 h-12 text-yellow-500" />,
              text: "Committed to environmental consciousness with IGBC Gold-rated buildings."
            }, {
              title: "Community Focus",
              icon: <Users className="w-12 h-12 text-amber-500" />,
              text: "Creating sustainable communities with deep connections to Vrindavan."
            }].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg p-6 text-center hover:scale-105 hover:shadow-2xl transition"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </section>

          {/* Vision Section */}
         <section className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto px-6 py-16 bg-white/100 rounded-xl mb-10">
  <div className="lg:w-1/2">
    <h2 className="text-4xl font-bold mb-4"
    >The Krishna Bhumi Vision</h2>
    <p className="mb-8 text-black">
      Krishna Bhumi is more than just a residential and commercial development – it's an iconic life-changing experience centered around a magnificent Krishna temple.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        {
          title: "Krishna Bhumi Arcade",
          text: "Premium commercial complex",
        },
        {
          title: "Luxury Living",
          text: "Villas and Apartments with contemporary comfort",
        },
        {
          title: "Sacred Connection",
          text: "Deep connection to Vrindavan’s sacred environment",
        },
        {
          title: "Modern Spirituality",
          text: "Modern amenities with a spiritual atmosphere",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow hover:shadow-lg transition"
        >
          <h4 className="text-base font-semibold mb-1">{item.title}</h4>
          <p className="text-sm text-gray-700">{item.text}</p>
        </div>
      ))}
    </div>
  </div>

  <img
    src="../assets/feather.jpeg"
    alt="Krishna Bhumi Vision"
    className="rounded-xl shadow-md w-full max-w-md"
  />
</section>


          {/* Society & Philosophy Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 py-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-md mb-10">
            {[{
              title: "Social Responsibility",
              icon: <Heart className="w-10 h-10 text-pink-500" />,
              text: "Supporting education, healthcare, and senior care through Akshaya Patra and Vidya Bharati."
            }, {
              title: "Our Philosophy",
              icon: <Lightbulb className="w-10 h-10 text-yellow-600" />,
              text: "Creating spaces where modern comfort harmonizes with spiritual serenity."
            }].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="rounded-2xl bg-white/90 backdrop-blur-sm shadow p-6 hover:scale-105 transition"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </section>

          {/* Achievements Section */}
          <section className="bg-white/90 backdrop-blur-sm py-16 px-6 rounded-xl shadow-md max-w-6xl mx-auto mb-10">
            <h2 className="text-center text-3xl font-bold mb-10">Our Achievements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[{
                title: "World 7th USGBC Platinum",
                icon: <Award className="w-10 h-10 text-green-500" />,
                text: "Recognized for exceptional green building standards."
              }, {
                title: "Pioneer in IT Infrastructure",
                icon: <Building className="w-10 h-10 text-blue-500" />,
                text: "Revolutionized Eastern India's IT landscape."
              }, {
                title: "Sustainable Development",
                icon: <Leaf className="w-10 h-10 text-emerald-600" />,
                text: "IGBC Gold-rated excellence in sustainable practices."
              }].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="rounded-2xl bg-white/90 backdrop-blur-sm shadow p-6 text-center hover:scale-105 transition"
                >
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default About;

import { motion } from "framer-motion";
import spiritual from "../assets/logoimage1.png";
const access = "https://i.ibb.co/7dmZQTL0/divinelogo.png";
const architecture = "https://i.ibb.co/N6mzjMBf/archlogo.png";
const wellness = "https://i.ibb.co/67vmGL7c/holilogo.png";
const eldercare = "https://i.ibb.co/XZWqtn7t/elder.png";
const green = "https://i.ibb.co/9HzJNzyR/green.png";
const infra = "https://i.ibb.co/BhW5mkF/infra.png";

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
    description: "Expansive green zones and outdoor spaces rooted in Vrindavan's serene and spiritual environment.",
  },
  {
    icon: infra,
    title: "Community Infrastructure",
    subtitle: "Complete Modern Amenities",
    description: "Everything from gyms and pools to stores and laundromats – a fully self-contained township.",
  },
];

const KrishnaBhumiDifferentiation = () => {
  return (
    <section id="differentiation" className="py-10 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="rounded-3xl bg-white/30 backdrop-blur-sm shadow-2xl p-10 sm:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-10 text-white">
            Key Definition of <span className="text-yellow-500">Krishna Bhumi</span>
          </h2>
          <p className="text-lg text-center text-black mb-12">
            Experience a unique blend of spiritual serenity and modern luxury
          </p>

          <div className="carousel relative mx-auto" style={{
            ['--items' as any]: differentiators.length,
            ['--carousel-duration' as any]: '35s',
            ['--carousel-width' as any]: '80vw',
            ['--carousel-item-width' as any]: '280px',
            ['--carousel-item-height' as any]: '420px',
            ['--carousel-item-gap' as any]: '2rem',
          }}>
            {differentiators.map((item, idx) => (
              <article
                key={item.title}
                className="absolute top-0 bg-white/50 backdrop-blur-lg border border-gray-300 rounded-xl shadow-md flex flex-col"
                style={{
                  width: 'var(--carousel-item-width)',
                  height: 'var(--carousel-item-height)',
                  left: `calc(100% + var(--carousel-item-gap))`,
                  animationName: 'marquee',
                  animationDuration: 'var(--carousel-duration)',
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite',
                  animationDelay: `calc(var(--carousel-duration) / var(--items) * ${idx} * -1)`,
                  willChange: 'transform',
                }}
              >
                <div className="h-52 flex items-center justify-center p-4">
                  <img src={item.icon} alt={item.title} className="h-full object-contain rounded-t-xl" />
                </div>
                <div className="flex-grow flex flex-col justify-between p-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-600 text-center mb-1">{item.title}</h3>
                    <h4 className="text-md text-gray-800 font-medium text-center mb-2">{item.subtitle}</h4>
                  </div>
                  <p className="text-sm text-gray-600 text-center">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`
        @keyframes marquee {
          100% {
            transform: translateX(calc((var(--items) * (var(--carousel-item-width) + var(--carousel-item-gap))) * -1));
          }
        }
        .carousel:hover > article {
          animation-play-state: paused;
        }
        .carousel {
          overflow: hidden;
          height: var(--carousel-item-height);
          width: var(--carousel-width);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          position: relative;
        }
      `}</style>
    </section>
  );
};

export default KrishnaBhumiDifferentiation;

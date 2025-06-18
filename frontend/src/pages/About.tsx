// import React from "react";

// Your existing imports
const heroImage = "https://i.ibb.co/LhqVWQvk/hero-copy.jpg" ;
const govardhan = "https://i.ibb.co/gbj8ZZq0/govardhan.png";
const tulsi = "https://i.ibb.co/Y4H9kjfm/Tulsi-Vaas.png";
const yamuna = "https://i.ibb.co/MDdJ64gr/Yamuna-Vaas.png";
const featherImage = "https://i.ibb.co/pj3ndCj6/feather-copy.png";

import {
  // CheckCircle,
  Leaf,
  Users,
  Award,
  Building,
  Heart,
  Lightbulb,
} from "lucide-react";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[807px] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              About <span className="text-yellow-500">Krishna Bhumi</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/80">
              Where spiritual heritage meets contemporary living
            </p>
          </div>
        </div>
      </div>

      {/* IMPROVED: Single background container with clear visibility */}
      <div className="relative min-h-screen">
        {/* Background image layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${featherImage})`,
          }}
        />
        
        {/* Overlay layer for better readability */}
        <div className="absolute inset-0 bg-white/50" />
        
        {/* Content layer */}
        <div className="relative z-10 text-gray-900">
          
          {/* Introduction Section */}
          <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="bg-white/80 rounded-2xl p-8 shadow-lg border border-white/30">
              <p className="text-lg leading-relaxed text-center text-gray-800">
                Nestled in the sacred city of Vrindavan along the strategic Chhatikara Road,
                Krishna Bhumi represents the culmination of Infinity Group's vision to
                create transformative living spaces that honor both tradition and innovation.
                As an <span className="text-yellow-600 font-semibold">IGBC Gold-rated </span>
                development, it stands as a testament to our commitment to sustainable and
                environmentally conscious construction.
              </p>
            </div>
          </section>

          {/* Residential Phases Section */}
          <section className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gray-800">Our</span> <span className="text-yellow-400">Residential Phases</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Govardhan Vaas",
                  desc: "Our first phase of premium residences, already delivered and home to a thriving community.",
                  img: govardhan,
                  badge: "Delivered"
                },
                {
                  title: "Tulsi Vaas",
                  desc: "The next phase of our residential development, bringing new living possibilities.",
                  img: tulsi,
                  badge: "Upcoming"
                },
                {
                  title: "Yamuna Vaas",
                  desc: "Our future residential phase, promising an elevated living experience.",
                  img: yamuna,
                  badge: "Upcoming"
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${item.img})`,
                    }}
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                      item.badge === 'Delivered' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-orange-500 text-white'
                    }`}>
                      {item.badge}
                    </span>
                  </div>
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/90 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pillars Section */}
          <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  title: "Our Legacy",
                  icon: <Award className="w-12 h-12 text-orange-500" />,
                  text: "Building upon decades of pioneering green building development in India."
                },
                {
                  title: "Sustainability",
                  icon: <Leaf className="w-12 h-12 text-green-600" />,
                  text: "Committed to environmental consciousness with IGBC Gold-rated buildings."
                },
                {
                  title: "Community Focus",
                  icon: <Users className="w-12 h-12 text-blue-600" />,
                  text: "Creating sustainable communities with deep connections to Vrindavan."
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/90 rounded-2xl shadow-lg p-8 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Vision Section */}
          <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="bg-white/90 rounded-3xl p-8 md:p-12 shadow-xl border border-white/30">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h2 className="text-4xl font-bold mb-6 text-black/100">
                    The Krishna Bhumi <span className="text-yellow-500">Vision</span>
                  </h2>
                  <p className="mb-8 text-black-700 text-lg leading-relaxed">
                    Krishna Bhumi is more than just a residential and commercial development – 
                    it's an iconic life-changing experience centered around a magnificent Krishna temple.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Krishna Bhumi Arcade",
                        text: "Premium commercial complex",
                        icon: "🏢"
                      },
                      {
                        title: "Luxury Living",
                        text: "Villas and Apartments with contemporary comfort",
                        icon: "🏠"
                      },
                      {
                        title: "Sacred Connection",
                        text: "Deep connection to Vrindavan's sacred environment",
                        icon: "🕉️"
                      },
                      {
                        title: "Modern Spirituality",
                        text: "Modern amenities with a spiritual atmosphere",
                        icon: "✨"
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-br from-white/80 to-white/60 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <h4 className="font-bold mb-1 text-gray-800">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${featherImage})`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-2">Krishna Bhumi Vision</h3>
                        <p className="text-white/90">Experience divine living</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Society & Philosophy Section */}
          <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Social Responsibility",
                  icon: <Heart className="w-12 h-12 text-pink-500" />,
                  text: "Supporting education, healthcare, and senior care through Akshaya Patra and Vidya Bharati.",
                },
                {
                  title: "Our Philosophy",
                  icon: <Lightbulb className="w-12 h-12 text-yellow-600" />,
                  text: "Creating spaces where modern comfort harmonizes with spiritual serenity.",
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/90 rounded-2xl shadow-lg p-8 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {item.icon}
                    <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements Section */}
          <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="bg-white/95 rounded-3xl p-8 md:p-12 shadow-xl border border-white/30">
              <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-800">
                Our <span className="text-yellow-400">Achievements</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  {
                    title: "World 7th USGBC Platinum",
                    icon: <Award className="w-12 h-12 text-green-500" />,
                    text: "Recognized for exceptional green building standards."
                  },
                  {
                    title: "Pioneer in IT Infrastructure",
                    icon: <Building className="w-12 h-12 text-blue-500" />,
                    text: "Revolutionized Eastern India's IT landscape."
                  },
                  {
                    title: "Sustainable Development",
                    icon: <Leaf className="w-12 h-12 text-emerald-600" />,
                    text: "IGBC Gold-rated excellence in sustainable practices."
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/80 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex justify-center mb-6">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default About;
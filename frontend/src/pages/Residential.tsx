import { useState } from "react";
import { Download, Eye, Home, MapPin, Building2, Users } from "lucide-react";
const featherImage = "https://i.ibb.co/pj3ndCj6/feather-copy.png";
const heroImage = "https://i.ibb.co/LhqVWQvk/hero-copy.jpg";

const Residential = () => {
  const [activeTab, setActiveTab] = useState('apartments');

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
              Residential <span className="text-yellow-400">Properties</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Discover our collection of luxury homes in the divine township of Krishna Bhumi
            </p>
          </div>
        </div>
      </div>

      <section className="relative min-h-screen overflow-hidden">
        {/* Background image layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${featherImage})`,
          }}
        />
        
        {/* Overlay layer for better readability */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 z-5 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-yellow-200 rounded-full opacity-30 z-5 animate-bounce" />

        {/* Content layer */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Welcome Section */}
            <div className="text-center py-16">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl py-12 px-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300">
                <p className="text-gray-700 text-xl max-w-4xl mx-auto leading-relaxed mb-8">
                  Experience modern living with spiritual serenity in Vrindavan's most prestigious address. 
                  Our thoughtfully designed homes blend contemporary comfort with the sacred essence of this divine land.
                </p>
                
                {/* Quick Stats */}
                <div className="flex flex-wrap justify-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold">11 Towers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold">2 & 3 BHK</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold">30 Acres</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold">70% Green Area</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Toggle Button Section */}
            <div className="flex justify-center mb-12">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/30">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('apartments')}
                    className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeTab === 'apartments'
                        ? 'bg-orange-500 text-white shadow-lg'
                        : 'text-gray-700 hover:text-orange-500'
                    }`}
                  >
                    Premium Apartments
                  </button>
                  <button
                    onClick={() => setActiveTab('villas')}
                    className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeTab === 'villas'
                        ? 'bg-orange-500 text-white shadow-lg'
                        : 'text-gray-700 hover:text-orange-500'
                    }`}
                  >
                    Luxury Villas
                  </button>
                </div>
              </div>
            </div>

            {/* Dynamic Content Based on Active Tab */}
            {activeTab === 'apartments' && (
              <>
                {/* Premium Apartments Description */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl py-8 px-8 shadow-xl border border-white/30">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
                    Premium <span className="text-yellow-400">Apartments</span>
                  </h2>
                  <p className="text-gray-700 text-lg max-w-5xl mx-auto leading-relaxed text-center">
                    Offering some of the best apartments in Vrindavan, Krishna Bhumi - Govardhan Vas, comes with premium 2 and 3 BHK condominiums spanning 568 - 1800 sq.ft. configured over eleven G+14 buildings.
                    <br /><br />
                    Every unit is aesthetically and minimistically designed, so that you have more space and a sense of freedom even inside your own home. The windows and the balconies overlook the huge campus and within that, the lush greenery. All fittings and fixtures used are of the best quality.
                  </p>
                </div>

                {/* Project Highlights */}
                <section>
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                    Project <span className="text-yellow-400">Highlights</span>
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    {[
                      { label: "Building Height", value: "G+14 Floors", icon: "🏢", color: "from-purple-400 to-violet-500" },
                      { label: "Total Towers", value: "11 Buildings", icon: "🏗️", color: "from-orange-400 to-red-500" },
                      { label: "Unit Types", value: "2 & 3 BHK", icon: "🏠", color: "from-green-400 to-emerald-500" },
                    ].map((item, idx) => (
                      <div key={idx} className="group">
                        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/30 transform hover:scale-105">
                          <div className="mb-4 flex justify-center">
                            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                              <span className="text-xl">{item.icon}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-yellow-400 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                            {item.value}
                          </h3>
                          <p className="text-gray-700 font-medium">
                            {item.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Apartment Options */}
                <section>
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                    Luxury <span className="text-yellow-400">Apartments</span>
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      {
                        type: "2 BHK Premium",
                        location: "Vrindavan",
                        beds: 2,
                        baths: 2,
                        area: "1,464-1,496 sq.ft",
                        price: "1.55 Cr*",
                        color: "from-rose-400 to-pink-500",
                        specifications: {
                          carpet: "827.86-831.63 sq.ft",
                          balcony: "106.67-139.61 sq.ft",
                          builtUp: "1098-1122 sq.ft",
                          superBuiltUp: "1464-1496 sq.ft",
                          salePrice: "₹1.55 Cr - ₹1.67 Cr"
                        }
                      },
                      {
                        type: "3 BHK Luxury",
                        location: "Vrindavan",
                        beds: 3,
                        baths: 3,
                        area: "1,793-1,800 sq.ft",
                        price: "1.89 Cr*",
                        color: "from-indigo-400 to-purple-500",
                        specifications: {
                          carpet: "1021.29 sq.ft",
                          balcony: "146.61 sq.ft",
                          builtUp: "1345-1350 sq.ft",
                          superBuiltUp: "1793-1800 sq.ft",
                          salePrice: "₹1.89 Cr - ₹2.00 Cr"
                        }
                      },
                    ].map((apt, idx) => (
                      <div key={idx} className="group">
                        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/30 space-y-4 transform hover:scale-105">
                          <div className="flex items-center justify-between mb-6">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${apt.color} flex items-center justify-center shadow-lg`}>
                              <Home className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-3xl font-bold text-green-600">₹{apt.price}</span>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                            {apt.type}
                          </h3>
                          
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span>{apt.location}</span>
                          </div>
                          
                          <div className="flex items-center justify-between text-gray-700 bg-white/50 p-4 rounded-xl">
                            <span className="flex items-center gap-1">
                              🛏️ {apt.beds} Beds
                            </span>
                            <span className="flex items-center gap-1">
                              🚿 {apt.baths} Baths
                            </span>
                            <span className="flex items-center gap-1">
                              📐 {apt.area}
                            </span>
                          </div>
                          
                          <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium inline-flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                            <Eye size={18} /> View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Master Plan + Floor Plans */}
                <section>
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                    Plans & <span className="text-yellow-400">Layouts</span>
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="bg-gradient-to-r from-orange-400 to-red-500 p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <MapPin className="w-6 h-6" />
                          </div>
                          <h3 className="text-2xl font-bold">Master Plan</h3>
                        </div>
                        <p className="mb-2 text-white/90">Complete township layout</p>
                        <div className="space-y-2 mb-6 text-white/90">
                          <div>Total Area: 30 Acres</div>
                          <div>Green Area: 70%</div>
                          <div>Total Towers: 11</div>
                        </div>
                        <button className="bg-white text-yellow-400 px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                          <Eye size={18} /> View Master Plan
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <div className="bg-gradient-to-r from-green-400 to-emerald-600 p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <Building2 className="w-6 h-6" />
                          </div>
                          <h3 className="text-2xl font-bold">Floor Plans</h3>
                        </div>
                        <p className="mb-2 text-white/90">2 & 3 BHK configurations</p>
                        <div className="space-y-2 mb-6 text-white/90">
                          <div><strong>2 BHK:</strong> 568-1100 sq.ft</div>
                          <div><strong>3 BHK:</strong> 1100-1800 sq.ft</div>
                        </div>
                        <button className="bg-white text-green-700 px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                          <Download size={18} /> Download Floor Plans
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Price List & Payment Plan */}
                <section>
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                    Price List & Payment <span className="text-orange-500">Plan</span>
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Container - Price List */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/30 h-[600px] flex flex-col">
                      <div className="p-6 border-b border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Govardhan Vas - Price List</h3>
                        <p className="text-sm text-gray-600">w.e.f. 01-01-2024</p>
                      </div>
                      
                      <div className="flex-1 overflow-y-auto p-6 space-y-8">
                        {/* 2 BHK Specifications */}
                        <div className="space-y-4">
                          <h4 className="text-xl font-bold text-yellow-400 border-b border-orange-200 pb-2">
                            2 BHK Premium Specifications
                          </h4>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium text-gray-700">Carpet Area</span>
                              <span className="font-bold text-gray-800">827.86-831.63 sq.ft</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium text-gray-700">Balcony Area</span>
                              <span className="font-bold text-gray-800">106.67-139.61 sq.ft</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium text-gray-700">Built-up Area</span>
                              <span className="font-bold text-gray-800">1098-1122 sq.ft</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium text-gray-700">Super Built-up Area</span>
                              <span className="font-bold text-gray-800">1464-1496 sq.ft</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                              <span className="font-bold text-gray-700">Sale Price (including GST)</span>
                              <span className="font-bold text-green-600 text-lg">₹1.55 Cr - ₹1.67 Cr</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* 3 BHK Specifications */}
                        <div className="space-y-4">
                          <h4 className="text-xl font-bold text-yellow-400 border-b border-orange-200 pb-2">
                            3 BHK Luxury Specifications
                          </h4>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium text-gray-700">Carpet Area</span>
                              <span className="font-bold text-gray-800">1021.29 sq.ft</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium text-gray-700">Balcony Area</span>
                              <span className="font-bold text-gray-800">146.61 sq.ft</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium text-gray-700">Built-up Area</span>
                              <span className="font-bold text-gray-800">1345-1350 sq.ft</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="font-medium text-gray-700">Super Built-up Area</span>
                              <span className="font-bold text-gray-800">1793-1800 sq.ft</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                              <span className="font-bold text-gray-700">Sale Price (including GST)</span>
                              <span className="font-bold text-green-600 text-lg">₹1.89 Cr - ₹2.00 Cr</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Container - Payment Plan */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/30 h-[600px] flex flex-col">
                      <div className="p-6 border-b border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-800">Payment Plan</h3>
                      </div>
                      
                      <div className="flex-1 overflow-y-auto p-6">
                        <div className="space-y-4">
                          {[
                            { percentage: "10%", description: "On Application", detail: "of the total Apartment Cost + GST" },
                            { percentage: "15%", description: "Within 15 days of Registration of AFS", detail: "of the total Apartment Cost + GST" },
                            { percentage: "10%", description: "On completion of Basement Roof Slab", detail: "of the total Apartment Cost + GST" },
                            { percentage: "10%", description: "On completion of 2nd Floor Slab", detail: "of the total Apartment Cost + GST" },
                            { percentage: "10%", description: "On completion of 4th Floor Slab", detail: "of the total Apartment Cost + GST" },
                            { percentage: "5%", description: "On completion of 6th Floor Slab", detail: "of the total Apartment Cost + GST" },
                            { percentage: "5%", description: "On completion of 8th Floor Slab", detail: "of the total Apartment Cost + GST" },
                            { percentage: "5%", description: "On completion of 10th Floor Slab", detail: "of the total Apartment Cost + GST" },
                            { percentage: "5%", description: "On completion of 12th Floor Slab", detail: "of the total Apartment Cost + GST" },
                            { percentage: "5%", description: "On completion of Brick work", detail: "of the total Apartment Cost + GST" },
                            { percentage: "5%", description: "On completion of Electric/Plumbing work", detail: "of the total Apartment Cost + GST" },
                            { percentage: "5%", description: "On completion of Flooring", detail: "of the total Apartment Cost + GST" },
                            { percentage: "5%", description: "On completion of Painting", detail: "of the total Apartment Cost + GST" },
                            { percentage: "5%", description: "At the time of Possession", detail: "of the total Apartment cost + Admin & Legal Charges + IFMS + Electrification, DG Set charges & EDC + Electric Connection meter charges + Stamp Duty + Registration Charges + GST as applicable + Other Deposits Taxes & Charges" },
                          ].map((payment, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
                              <div className="text-2xl font-bold text-blue-600 mb-2">{payment.percentage}</div>
                              <div className="font-semibold text-gray-800 mb-2">{payment.description}</div>
                              <div className="text-xs text-gray-600">{payment.detail}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-6 border-t border-gray-200">
                        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                          <Download size={18} /> Download Payment Schedule
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {activeTab === 'villas' && (
              <>
                {/* Luxury Villas Description */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl py-8 px-8 shadow-xl border border-white/30">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
                    Luxury <span className="text-orange-500">Villas</span>
                  </h2>
                  <p className="text-gray-700 text-lg max-w-5xl mx-auto leading-relaxed text-center">
                    Experience unparalleled luxury in our meticulously designed villas, offering spacious living spaces and premium amenities.
                  </p>
                </div>

                {/* Villa Options */}
                <section>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        name: "Shyam Kutir",
                        plotSize: "4,306 sq ft",
                        beds: 5,
                        baths: 6,
                        area: "4,306 sq ft",
                        price: "2.5 Cr*",
                        color: "from-purple-400 to-violet-500",
                        status: "Sold Out"
                      },
                      {
                        name: "Keshav Kutir",
                        plotSize: "2,519 sq ft",
                        beds: 4,
                        baths: 4,
                        area: "2,519 sq ft",
                        price: "1.8 Cr*",
                        color: "from-blue-400 to-cyan-500",
                        status: "Sold Out"
                      },
                      {
                        name: "Gopal Kutir",
                        plotSize: "1,399 sq ft",
                        beds: 3,
                        baths: 3,
                        area: "1,399 sq ft",
                        price: "1.2 Cr*",
                        color: "from-green-400 to-emerald-500",
                        status: "Sold Out"
                      },
                    ].map((villa, idx) => (
                      <div key={idx} className="group relative">
                        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/30 space-y-4 relative overflow-hidden">
                          {/* Sold Out Banner */}
                          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {villa.status}
                          </div>
                          
                          <div className="flex items-center justify-between mb-6">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${villa.color} flex items-center justify-center shadow-lg`}>
                              <Home className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-3xl font-bold text-green-600">₹{villa.price}</span>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                            {villa.name}
                          </h3>
                          
                          <div className="text-gray-600 mb-2">
                            Plot Size: {villa.plotSize}
                          </div>
                          
                          <div className="flex items-center justify-between text-gray-700 bg-white/50 p-4 rounded-xl">
                            <span className="flex items-center gap-1">
                              🛏️ {villa.beds} Beds
                            </span>
                            <span className="flex items-center gap-1">
                              🚿 {villa.baths} Baths
                            </span>
                            <span className="flex items-center gap-1">
                              📐 {villa.area}
                            </span>
                          </div>
                          
                          <button disabled className="w-full mt-6 bg-gray-400 text-white px-6 py-3 rounded-xl font-medium inline-flex items-center justify-center gap-2 cursor-not-allowed opacity-60">
                            <Eye size={18} /> {villa.status}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {/* Premium Amenities - Common for both */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                Premium <span className="text-yellow-400">Amenities</span>
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Experience luxury living with our carefully curated selection of world-class amenities
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Modern Kitchen", desc: "Premium Fittings & Modular Design", icon: "🍳" },
                  { title: "Spacious Balconies", desc: "Garden Views & Natural Light", icon: "🌅" },
                  { title: "Premium Flooring", desc: "High-quality Vitrified Tiles", icon: "🏠" },
                  { title: "Bathroom Fixtures", desc: "Premium Quality & Modern Design", icon: "🚿" },
                  { title: "Natural Light", desc: "Ample Ventilation & Sunlight", icon: "☀️" },
                  { title: "Power Backup", desc: "24/7 Uninterrupted Supply", icon: "⚡" },
                  { title: "Security System", desc: "Round-the-clock Surveillance", icon: "🔒" },
                  { title: "Parking Space", desc: "Dedicated & Secure Parking", icon: "🚗" },
                ].map((amenity, idx) => (
                  <div key={idx} className="group">
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30 text-center h-full transform hover:scale-105">
                      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {amenity.icon}
                      </div>
                      
                      <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-orange-600 transition-colors duration-300">
                        {amenity.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {amenity.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Residential;
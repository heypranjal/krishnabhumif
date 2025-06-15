import { motion } from 'framer-motion';
import { useState } from 'react';
import featherImage from "../assets/feather.jpeg";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const contactInfo = [
    {
      title: "Visit Our Office",
      description: "Come meet us at our headquarters",
      details: "123 Krishna Bhumi Avenue, New Town, Kolkata - 700156",
      icon: "📍",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Call Us",
      description: "Speak with our team directly",
      details: "+91 98765 43210 / +91 87654 32109",
      icon: "📞",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Email Us",
      description: "Send us your queries anytime",
      details: "info@krishnabhumi.com / sales@krishnabhumi.com",
      icon: "✉️",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Business Hours",
      description: "We're here to help you",
      details: "Mon - Sat: 9:00 AM - 7:00 PM / Sun: 10:00 AM - 5:00 PM",
      icon: "⏰",
      color: "from-purple-400 to-violet-500"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name as keyof ContactFormData]: value
    }));
  };

  const handleSubmit = async () => {
    // Basic validation
    const requiredFields: (keyof ContactFormData)[] = ['firstName', 'lastName', 'email', 'phone', 'subject', 'message'];
    const isValid = requiredFields.every(field => formData[field].trim() !== '');
    
    if (!isValid) {
      setSubmitError('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // This is where you'll integrate nodemailer
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after successful submission
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitError('Failed to send message. Please try again later.');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us" className="py-20 relative overflow-hidden">
      {/* Background with feather image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${featherImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-transparent" />
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20"
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
        className="absolute bottom-20 left-10 w-24 h-24 bg-orange-200 rounded-full opacity-30"
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
            Get in <span className="text-orange-500">Touch</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Have questions about Krishna Bhumi or need assistance? We're here to help. Reach out to us through any of the following channels or fill out the form below.
          </motion.p>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full text-center"
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="mb-4 flex justify-center"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <span className="text-2xl">{info.icon}</span>
                  </div>
                </motion.div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {info.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3">
                  {info.description}
                </p>

                <p className="text-gray-700 text-xs leading-relaxed font-medium">
                  {info.details}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20"
            whileHover={{ 
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
            }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Send us a <span className="text-orange-500">Message</span>
            </motion.h2>

            {isSubmitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                {submitError && (
                  <motion.div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {submitError}
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="Enter your first name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="Enter your last name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="Enter your email address"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="Enter your phone number"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Property Information">Property Information</option>
                    <option value="Channel Partner">Channel Partner Program</option>
                    <option value="Site Visit">Schedule Site Visit</option>
                    <option value="Investment">Investment Opportunities</option>
                    <option value="Support">Customer Support</option>
                    <option value="Other">Other</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm resize-vertical"
                    placeholder="Tell us how we can help you..."
                  />
                </motion.div>

                <motion.div
                  className="text-center pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                    whileHover={!isSubmitting ? { 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(255, 69, 0, 0.4)",
                    } : {}}
                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                    animate={!isSubmitting ? {
                      boxShadow: [
                        "0 4px 15px rgba(255, 69, 0, 0.2)",
                        "0 8px 25px rgba(255, 69, 0, 0.3)",
                        "0 4px 15px rgba(255, 69, 0, 0.2)",
                      ],
                    } : {}}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </motion.div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
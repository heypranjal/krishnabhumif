import React, { useState } from "react";
import { motion } from "framer-motion";
import featherImage from "../assets/feather.jpeg"; // Adjust the path as needed
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  MessageSquare,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear any previous errors when user starts typing
    if (submitError) {
      setSubmitError("");
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Prepare the payload for your backend API
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        city: "Vrindavan", // Default city based on your contact info
        location: "Mathura, Uttar Pradesh", // Default location
        project: "Krishna Bhumi Inquiry", // Default project name
        source: "Website", // This will map to Channel: "MS", Src: "WebSite"
        url: window.location.href, // Current page URL
        isd: "91", // Default ISD code for India
      };

      // Call your backend API
      const response = await fetch("http://localhost:4000/api/send-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        // Reset form after success
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
        }, 3000);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 98765 43210",
      subInfo: "Mon-Sat, 9AM-7PM",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "info@krishnabhumi.com",
      subInfo: "We'll respond within 24hrs",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Vrindavan, Mathura",
      subInfo: "Uttar Pradesh, India",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Clock,
      title: "Office Hours",
      info: "9:00 AM - 7:00 PM",
      subInfo: "Monday to Saturday",
      color: "from-orange-400 to-red-500",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background with feather image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${featherImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#003049]" />
      </motion.div>

      {/* Floating Krishna feather */}
      <motion.div
        className="absolute top-20 right-20 w-8 h-8 text-yellow-300 opacity-30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C10 2 8.5 3.5 8.5 5.5C8.5 7 9.36 8.28 10.5 8.82V15.5C10.5 16.33 11.17 17 12 17S13.5 16.33 13.5 15.5V8.82C14.64 8.28 15.5 7 15.5 5.5C15.5 3.5 14 2 12 2Z" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-16 w-6 h-6 text-orange-300 opacity-40"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -10, 10, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C10 2 8.5 3.5 8.5 5.5C8.5 7 9.36 8.28 10.5 8.82V15.5C10.5 16.33 11.17 17 12 17S13.5 16.33 13.5 15.5V8.82C14.64 8.28 15.5 7 15.5 5.5C15.5 3.5 14 2 12 2Z" />
        </svg>
      </motion.div>

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
            Contact <span className="text-yellow-400">Krishna Bhumi</span>
          </motion.h2>
          <motion.p
            className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to begin your spiritual journey? Get in touch with us today
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <motion.div
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-yellow-300/50 transition-all duration-500 h-full"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <motion.div
                        className="mb-4 flex justify-center"
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          scale: 1.2,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>

                      <h3 className="text-lg font-bold text-white mb-2 text-center group-hover:text-yellow-300 transition-colors duration-300">
                        {item.title}
                      </h3>

                      <p className="text-amber-100 text-center font-medium mb-1 group-hover:text-white transition-colors duration-300">
                        {item.info}
                      </p>

                      <p className="text-amber-200 text-center text-sm group-hover:text-amber-100 transition-colors duration-300">
                        {item.subInfo}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-yellow-400 transition-colors duration-300" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </motion.div>

                  <motion.div
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-yellow-400 transition-colors duration-300" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all duration-300"
                      placeholder="Your Email"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-yellow-400 transition-colors duration-300" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-white/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all duration-300"
                    placeholder="Your Phone Number"
                    required
                  />
                </motion.div>

                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400 group-focus-within:text-yellow-400 transition-colors duration-300" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-white/10 border border-white/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-400 focus:bg-white/20 transition-all duration-300 resize-none"
                    placeholder="Your Message"
                    required
                  />
                </motion.div>

                {/* Error Message */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-300 bg-red-500/10 border border-red-500/20 rounded-xl p-3"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">{submitError}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitted
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:shadow-xl"
                  }`}
                  whileHover={
                    !isSubmitting && !isSubmitted
                      ? {
                          scale: 1.02,
                          boxShadow: "0 20px 40px rgba(255, 140, 0, 0.4)",
                        }
                      : {}
                  }
                  whileTap={{ scale: 0.98 }}
                  animate={
                    isSubmitting
                      ? {
                          boxShadow: [
                            "0 4px 15px rgba(255, 140, 0, 0.3)",
                            "0 8px 25px rgba(255, 140, 0, 0.5)",
                            "0 4px 15px rgba(255, 140, 0, 0.3)",
                          ],
                        }
                      : {}
                  }
                  transition={{
                    boxShadow: {
                      duration: 1.5,
                      repeat: isSubmitting ? Infinity : 0,
                      ease: "easeInOut",
                    },
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

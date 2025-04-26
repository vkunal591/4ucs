"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const offices = [
  // {
  //   city: "New York",
  //   address: "123 Tech Avenue, NY 10001",
  //   phone: "+1 (555) 123-4567",
  //   email: "ny@4uconsultant.com",
  // },
  // {
  //   city: "London",
  //   address: "456 Innovation Street, EC1A 1BB",
  //   phone: "+44 20 7123 4567",
  //   email: "london@4uconsultant.com",
  // },
  // {
  //   city: "Singapore",
  //   address: "789 Digital Road, 018956",
  //   phone: "+65 6789 0123",
  //   email: "singapore@4uconsultant.com",
  // },
  {
    city: "New Delhi, India",
    // address: "789 Digital Road, 018956",
    phone: "+65 6789 0123",
    email: "info@4uconsultant.com",
  },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Get in touch with us and let's
              create something amazing together.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-900/20 border border-blue-900/50 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-900/20 border border-blue-900/50 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-900/20 border border-blue-900/50 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-900/20 border border-blue-900/50 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="ai">AI/ML Solutions</option>
                    <option value="blockchain">Blockchain</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-blue-900/20 border border-blue-900/50 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  required
                ></textarea>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block w-full"
              >
                <button
                  type="submit"
                  className=" w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-colors text-lg"
                  // className="w-full bg-[#366dee] text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* Office Locations */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold mb-8">Our Offices</h2>
            <div className="space-y-8">
              {offices.map((office) => (
                <motion.div
                  key={office.city}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-gradient-to-br from-blue-900/20 to-transparent rounded-lg"
                >
                  <h3 className="text-xl font-semibold mb-4">{office.city}</h3>
                  <div className="space-y-2 text-gray-300">
                    {/* <p>{office.address}</p> */}
                    <p>
                      <a
                        href={`tel:${office.phone}`}
                        className="hover:text-[#366dee]"
                      >
                        {office.phone}
                      </a>
                    </p>
                    <p>
                      <a
                        href={`mailto:${office.email}`}
                        className="hover:text-[#366dee]"
                      >
                        {office.email}
                      </a>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

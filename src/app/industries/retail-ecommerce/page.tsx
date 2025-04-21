"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    title: "E-commerce Platforms",
    description: "Custom online shopping experiences with advanced features",
    icon: "/assets/industries/retail/ecommerce.svg",
    features: [
      "Multi-vendor support",
      "Payment gateway integration",
      "Inventory management",
    ],
  },
  {
    title: "Mobile Commerce",
    description: "Seamless shopping experiences on mobile devices",
    icon: "/assets/industries/retail/mobile-commerce.svg",
    features: ["Native apps", "Progressive web apps", "Mobile payments"],
  },
  {
    title: "Omnichannel Solutions",
    description: "Unified shopping experience across all channels",
    icon: "/assets/industries/retail/omnichannel.svg",
    features: ["In-store pickup", "Click & collect", "Unified inventory"],
  },
  {
    title: "Personalization Engine",
    description: "AI-powered product recommendations",
    icon: "/assets/industries/retail/personalization.svg",
    features: [
      "Behavioral analytics",
      "Dynamic pricing",
      "Smart recommendations",
    ],
  },
  {
    title: "Supply Chain Management",
    description: "Efficient inventory and logistics management",
    icon: "/assets/industries/retail/supply-chain.svg",
    features: [
      "Real-time tracking",
      "Automated replenishment",
      "Warehouse management",
    ],
  },
  {
    title: "Analytics & Insights",
    description: "Data-driven decision making tools",
    icon: "/assets/industries/retail/analytics.svg",
    features: [
      "Customer analytics",
      "Sales forecasting",
      "Performance metrics",
    ],
  },
];

const technologies = [
  { name: "React", icon: "/assets/tech/react.svg" },
  { name: "Node.js", icon: "/assets/tech/nodejs.svg" },
  { name: "MongoDB", icon: "/assets/tech/mongodb.svg" },
  { name: "AWS", icon: "/assets/tech/aws.svg" },
  { name: "Shopify", icon: "/assets/tech/shopify.svg" },
  { name: "Payment Gateways", icon: "/assets/tech/payment.svg" },
];

const stats = [
  { value: "98%", label: "Customer Satisfaction" },
  { value: "45%", label: "Conversion Rate Increase" },
  { value: "60%", label: "Cart Abandonment Reduction" },
  { value: "30%", label: "Average Revenue Growth" },
];

export default function RetailEcommerce() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at center, #366dee15 0%, transparent 70%)",
          }}
        />
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/assets/industries/retail/hero-bg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center w-full"
          >
            <motion.h1
              className="text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Retail & E-commerce Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Transform your retail business with cutting-edge technology
              solutions
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-900/20 to-transparent p-6 rounded-xl"
                >
                  <motion.h3
                    className="text-4xl font-bold mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-gray-300">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-16"
          >
            Our Retail Solutions
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-blue-900/20 to-transparent p-8 rounded-xl overflow-hidden"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={solution.icon}
                      alt={solution.title}
                      width={48}
                      height={48}
                      className="filter brightness-0 invert"
                    />
                    <h3 className="text-2xl font-semibold">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <motion.li
                        key={feature}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-20 bg-gradient-to-t from-blue-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-16"
          >
            Technologies We Use
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col items-center"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={64}
                  height={64}
                  className="filter brightness-0 invert mb-4"
                />
                <span className="text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">
              Ready to Transform Your Retail Business?
            </h2>
            <p className="text-gray-300">
              Let's discuss how our solutions can enhance your retail operations
              and drive growth.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/contact-us"
                className="inline-block bg-[#366dee] text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

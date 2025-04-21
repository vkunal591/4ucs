"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Projects Completed", value: "500+" },
  { label: "Team Members", value: "50+" },
  { label: "Client Satisfaction", value: "98%" },
];

const values = [
  {
    title: "Innovation",
    description:
      "Pushing boundaries with cutting-edge solutions and creative thinking",
    icon: "/assets/values/innovation.svg",
  },
  {
    title: "Excellence",
    description: "Delivering exceptional quality in every project we undertake",
    icon: "/assets/values/excellence.svg",
  },
  {
    title: "Integrity",
    description: "Building trust through transparency and ethical practices",
    icon: "/assets/values/integrity.svg",
  },
  {
    title: "Collaboration",
    description: "Working together to achieve extraordinary results",
    icon: "/assets/values/collaboration.svg",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-black/50 z-10" />
        <Image
          src="/assets/bg/about-hero.jpg"
          alt="About Us Hero"
          fill
          className="object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-200">
              We are a team of passionate technologists dedicated to
              transforming ideas into powerful digital solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-b from-black to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#366dee] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-900/20 to-transparent p-6 rounded-lg text-center hover:from-blue-800/30 transition-colors duration-300"
              >
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-gradient-to-b from-transparent to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-gray-300">
                To empower businesses through innovative technology solutions
                that drive growth, efficiency, and success in the digital age.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-gray-300">
                To be the leading force in digital transformation, setting new
                standards in technology innovation and client success.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

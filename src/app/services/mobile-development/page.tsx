"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "iOS Development",
    description: "Native iOS applications with Swift and SwiftUI",
    icon: "/assets/services/mobile/ios.svg",
  },
  {
    title: "Android Development",
    description: "Native Android applications with Kotlin and Jetpack",
    icon: "/assets/services/mobile/android.svg",
  },
  {
    title: "Cross-platform Apps",
    description: "Unified solutions with React Native and Flutter",
    icon: "/assets/services/mobile/cross-platform.svg",
  },
  {
    title: "App Maintenance",
    description: "Regular updates and performance optimization",
    icon: "/assets/services/mobile/maintenance.svg",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and engaging user interfaces",
    icon: "/assets/services/mobile/design.svg",
  },
  {
    title: "App Testing",
    description: "Comprehensive testing and quality assurance",
    icon: "/assets/services/mobile/testing.svg",
  },
];

const technologies = [
  { name: "React Native", icon: "/assets/tech/react-native.svg" },
  { name: "Flutter", icon: "/assets/tech/flutter.svg" },
  { name: "Swift", icon: "/assets/tech/swift.svg" },
  { name: "Kotlin", icon: "/assets/tech/kotlin.svg" },
  { name: "Firebase", icon: "/assets/tech/firebase.svg" },
  { name: "AWS", icon: "/assets/tech/aws.svg" },
];

export default function MobileDevelopment() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
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
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Mobile App Development</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build native and cross-platform mobile applications that deliver
              exceptional user experiences.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Our Mobile Development Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
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
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="filter brightness-0 invert"
                  />
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
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
                whileHover={{ scale: 1.1 }}
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
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-gray-300">
              Let's discuss how we can create a powerful mobile application for
              your business.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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

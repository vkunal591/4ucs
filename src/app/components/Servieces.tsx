"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Expert web development services delivering modern, responsive, and scalable solutions tailored to your business needs.",
  },
  {
    title: "App Development",
    description:
      "Cutting-edge mobile app development for iOS and Android platforms with seamless user experiences.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Advanced AI solutions including machine learning, natural language processing, and computer vision applications.",
  },
  {
    title: "Blockchain Development",
    description:
      "Secure and innovative blockchain solutions for various industries, from smart contracts to decentralized applications.",
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to boost your online presence and drive business growth.",
  },
];

export default function Servieces() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white text-center relative">
      <div className="relative w-full lg:w-96 h-96 mx-auto mb-16">
        {/* Semi-circle layout */}
        {Array.from({ length: 5 }).map((_, i) => {
          const angle = (Math.PI * i) / 4;
          const radius = 150;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <motion.span
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-16 h-16 absolute border-2 border-b-0 border-gray-50/20 flex items-center justify-center rounded-full"
              style={{
                left: `calc(50% + ${x}px - 2rem)`,
                top: `calc(50% - ${y}px - 2rem)`,
              }}
            />
          );
        })}

        {/* Inner circle design */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="h-24 overflow-hidden flex items-start justify-center absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <span className="w-52 h-52 border-t-2 border-gray-50/40 flex items-center justify-center rounded-full">
            <span className="w-32 h-32 inline-block border-t-2 border-gray-50/30 rounded-full" />
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-5xl font-bold uppercase text-center absolute bottom-24 left-1/2 -translate-x-1/2"
        >
          Services
        </motion.h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {services.slice(0, 3).map((service, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-contain bg-no-repeat bg-center h-96 p-12 lg:py-10 lg:px-16 drop-shadow-xs drop-shadow-gray-50 hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url('/assets/bg/triangle.svg')` }}
          >
            <h2 className="text-xl font-semibold text-gray-200 mb-4">
              {service.title}
            </h2>
            <p className="text-sm text-justify text-gray-200 px-6 line-clamp-6">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 lg:w-2/3 gap-8 mt-8">
        {services.slice(3).map((service, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: (index + 3) * 0.2 }}
            className="bg-contain bg-no-repeat bg-center h-96 p-12 lg:py-10 lg:px-16 drop-shadow-xs drop-shadow-gray-50 hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url('/assets/bg/triangle.svg')` }}
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-200">
              {service.title}
            </h2>
            <p className="text-sm text-justify px-6 line-clamp-6 text-gray-200">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

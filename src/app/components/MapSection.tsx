"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const countries = [
  { name: "India", top: "50%", left: "65%", delay: 0 },
  { name: "China", top: "35%", left: "68%", delay: 0.3 },
  { name: "USA", top: "45%", left: "20%", delay: 0.6 },
  { name: "Brazil", top: "55%", left: "30%", delay: 0.9 },
  { name: "Germany", top: "28%", left: "35%", delay: 1.2 },
  { name: "Australia", top: "70%", left: "80%", delay: 1.5 },
];

export default function MapSection() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-white text-center relative">
      {/* Hero Text */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Providing Services to
          <br />
          Millions of People Worldwide
        </h2>
        <Link
          href={"tel:"}
          className="inline-block rounded-full bg-gray-500/60 px-8 py-3 text-gray-50 hover:scale-105 hover:shadow-lg shadow-white transition-all duration-300"
        >
          Call Now
        </Link>
      </motion.div>

      {/* Map Image + Animations */}
      <div className="relative w-full h-[600px]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            alt="World Map"
            src="/assets/bg/map.svg"
            width={1200}
            height={600}
            className="w-full h-full object-contain"
            style={{
              filter:
                "drop-shadow(0 0 2px royalblue) brightness(0) saturate(100%) invert(22%) sepia(84%) saturate(2125%) hue-rotate(205deg) brightness(92%) contrast(97%)",
            }}
          />
        </motion.div>

        {/* Animated Country Markers */}
        <div className="absolute inset-0">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              className="absolute w-4 h-4"
              style={{ top: country.top, left: country.left }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.4, 1], opacity: 1 }}
              transition={{
                scale: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.4,
                  delay: country.delay,
                },
              }}
            >
              <div className="relative">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full" />
                <div className="absolute w-8 h-8 bg-blue-500/30 rounded-full -left-2 -top-2 animate-ping" />
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: country.delay + 0.2 }}
                  className="absolute text-sm text-white left-6 top-0 whitespace-nowrap"
                >
                  {country.name}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

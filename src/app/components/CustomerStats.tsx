"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CustomerStats() {
  return (
    <div className="text-white space-y-32">
      {/* Global Active Clientele Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">
          Global Active Clientele
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto">
          Our global reach extends across continents, serving diverse industries
          and businesses of all sizes with innovative solutions and unparalleled
          service.
        </p>
        <div className="relative">
          <Image
            src="/assets/bg/world-dots.svg"
            alt="World Map Dots"
            width={1200}
            height={600}
            className="w-full h-auto opacity-50"
          />
          <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold text-[#366dee]"
              >
                4.8M
              </motion.div>
              <div className="text-sm text-gray-300">Users</div>
            </div>
          </div>
          <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl font-bold text-[#366dee]"
              >
                20+
              </motion.div>
              <div className="text-sm text-gray-300">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Satisfaction Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">
          Unprecedented Customer Satisfaction
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto">
          Our commitment to excellence is reflected in our consistently high
          customer satisfaction ratings.
        </p>
        <div className="flex justify-center items-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.div
              key={star}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: star * 0.1 }}
            >
              <svg
                className="w-8 h-8 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-5xl font-bold text-[#366dee]"
          >
            4.5/5.0
          </motion.div>
          <div className="text-sm text-gray-300 mt-2">Average Rating</div>
        </div>
      </div>
    </div>
  );
}

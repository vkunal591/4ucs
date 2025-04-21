"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function OurVision() {
  return (
    <div className="space-y-32">
      {/* Vision Section */}
      <div className="py-4 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="m-auto relative"
          style={{
            filter: "drop-shadow(0px 110px 95px rgba(0, 0, 225, 0.5))",
            height: "310px",
            width: "70%",
            background: "transparent",
            borderTop: 0,
            border: "90px solid transparent",
            borderBottom: "100px solid rgba(0, 0, 225, 0.1)",
          }}
        >
          <Image
            src="/assets/bg/vission.svg"
            alt="Our Vision"
            width={700}
            height={700}
            className="h-44 m-auto mb-16 scale-105"
          />
          <div className="absolute">
            <h2 className="text-5xl font-bold text-center mb-4">Our Vision</h2>
            <p className="m-auto text-xl text-center px-4 text-gray-300">
              We provide innovative tomorrow's possibilities today and crafting
              transformative software solutions for a connected world.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Possibilities Section */}
      <div className="text-center space-y-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold"
        >
          Our possibilities expand
          <br />
          far beyond a solitary platform
        </motion.h3>
      </div>

      {/* Wing Section */}
      <div className="text-center space-y-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold"
        >
          Our another wing
        </motion.h3>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/assets/bg/wing.svg"
            alt="Qmos Wing"
            width={800}
            height={200}
            className="mx-auto"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/assets/logo/qmos.png"
              alt="Qmos Logo"
              width={120}
              height={40}
              className="mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

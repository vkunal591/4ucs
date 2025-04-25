"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const techIcons = [
  { name: "React", icon: "/assets/tech/tech2.svg" },
  { name: "Next.js", icon: "/assets/tech/next.svg" },
  { name: "Node.js", icon: "/assets/tech/nodejs.svg" },
  { name: "Python", icon: "/assets/tech/tech1.svg" },
  { name: "AWS", icon: "/assets/tech/tech7.svg" },
  { name: "PHP", icon: "/assets/tech/php.svg" },
  { name: "Docker", icon: "/assets/tech/tech6.svg" },
  { name: "Flutter", icon: "/assets/tech/tech4.svg" },
  { name: "MongoDB", icon: "/assets/tech/mongodb.png" },
  { name: "PostgreSQL", icon: "/assets/tech/postgresql.png" },
  { name: "TypeScript", icon: "/assets/tech/typescript.png" },
  { name: "Kotlin", icon: "/assets/tech/tech5.svg" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background Elements */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black" />
        <Image
          src="/assets/space-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 z-10">
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2,
            }}
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            className="w-16 h-16"
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={64}
              height={64}
              className="filter brightness-0 invert opacity-20"
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400"
            >
              Transform Your Digital Future
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              We build innovative software solutions that drive business growth
              and digital transformation
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact-us"
                  className="px-8 py-3 bg-[#366dee] text-white rounded-full hover:bg-blue-600 transition-colors text-lg"
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/our-work"
                  className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors text-lg"
                >
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

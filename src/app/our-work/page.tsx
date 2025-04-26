"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = ["All", "Web", "Mobile", "AI/ML", "Blockchain"];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web",
    image: "/assets/icons/retail.gif",
    description:
      "A full-featured e-commerce platform with advanced analytics and inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    title: "Healthcare App",
    category: "Mobile",
    image: "/assets/icons/healthcare.gif",
    description:
      "Mobile application for healthcare providers with real-time patient monitoring.",
    technologies: ["React Native", "Firebase", "Node.js"],
  },
  {
    title: "AI Trading Bot",
    category: "AI/ML",
    image: "/assets/icons/ai.gif",
    description:
      "Automated trading system using machine learning for market prediction.",
    technologies: ["Python", "TensorFlow", "AWS"],
  },
  {
    title: "DeFi Platform",
    category: "Blockchain",
    image: "/assets/icons/defi.gif",
    description: "Decentralized finance platform for crypto asset management.",
    technologies: ["Solidity", "Web3.js", "React"],
  },
  {
    title: "Social Network",
    category: "Web",
    image: "/assets/icons/social.gif",
    description:
      "Feature-rich social networking platform with real-time messaging.",
    technologies: ["Next.js", "GraphQL", "PostgreSQL"],
  },
  {
    title: "IoT Dashboard",
    category: "Web",
    image: "/assets/icons/ito.gif",
    description: "Real-time IoT device monitoring and management dashboard.",
    technologies: ["Vue.js", "Node.js", "InfluxDB"],
  },
];

export default function OurWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

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
              Our Work
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful projects and see how we've
              helped businesses transform their digital presence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              // className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-colors text-lg"
              className={`px-6 py-2 rounded-full transition-colors duration-300 bg-gradient-to-r from-blue-500 to-purple-500 text-white ${
                activeCategory === category
                  ? ""
                  : "bg-blue-900/20 text-gray-300 hover:from-blue-600 hover:to-purple-600 "
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  // fill
                  width={200}
                  height={200}
                  className="object-contain m-auto filter invert hue-rotate-[230deg] transition-transform duration-500 group-hover:scale-110"
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredProject === project.title ? 1 : 0,
                    y: hoveredProject === project.title ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col justify-end p-6"
                >
                  <div className="absolute inset-0 bg-black/70" />
                  <div className="z-10">
                    <h3 className="text-2xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-blue-900/50 rounded-full text-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-t from-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Have a Project in Mind?</h2>
            <p className="text-gray-300">
              Let's discuss how we can help bring your vision to life.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/contact-us"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-colors text-lg"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

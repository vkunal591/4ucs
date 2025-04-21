"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Web Development",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/globe-with-meridians.png",
    path: "/services/web-development",
    description:
      "Custom web applications and websites built with modern technologies",
  },
  {
    name: "App Development",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/mobile-phone.png",
    path: "/services/app-development",
    description:
      "Native and cross-platform mobile applications for iOS and Android",
  },
  {
    name: "Artificial Intelligence",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/robot.png",
    path: "/services/artificial-intelligence",
    description:
      "AI-powered solutions for automation and intelligent decision making",
  },
  {
    name: "Saas Development",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/cloud.png",
    path: "/services/saas-development",
    description: "Cloud-based software solutions for businesses of all sizes",
  },
  {
    name: "Blockchain Development",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/chain.png",
    path: "/services/blockchain-development",
    description: "Decentralized applications and smart contract development",
  },
  {
    name: "CRM Development",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/briefcase.png",
    path: "/services/crm-development",
    description: "Custom CRM solutions to streamline customer relationships",
  },
  {
    name: "UX/UI Designing",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/artist-palette.png",
    path: "/services/ux-ui-designing",
    description: "User-centered design for exceptional digital experiences",
  },
  {
    name: "Digital Marketing",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/megaphone.png",
    path: "/services/digital-marketing",
    description: "Strategic digital marketing solutions for business growth",
  },
  {
    name: "API Development",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/gear.png",
    path: "/services/api-development",
    description: "Robust API solutions for seamless system integration",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive range of technology services to help
            businesses thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800/50 transition-all duration-300"
            >
              <Link href={service.path}>
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-xl font-semibold">{service.name}</h2>
                </div>
                <p className="text-gray-400">{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

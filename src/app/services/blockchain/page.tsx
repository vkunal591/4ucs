"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Smart Contracts",
    description: "Secure and efficient smart contract development",
    icon: "/assets/services/blockchain/smart-contracts.svg",
  },
  {
    title: "DApp Development",
    description: "Decentralized applications with seamless user experience",
    icon: "/assets/services/blockchain/dapp.svg",
  },
  {
    title: "Cryptocurrency Solutions",
    description: "Custom cryptocurrency and token development",
    icon: "/assets/services/blockchain/crypto.svg",
  },
  {
    title: "Blockchain Consulting",
    description: "Strategic guidance for blockchain implementation",
    icon: "/assets/services/blockchain/consulting.svg",
  },
  {
    title: "Private Blockchains",
    description: "Enterprise-grade private blockchain solutions",
    icon: "/assets/services/blockchain/private.svg",
  },
  {
    title: "Token Development",
    description: "Custom token creation and management systems",
    icon: "/assets/services/blockchain/token.svg",
  },
];

const technologies = [
  { name: "Ethereum", icon: "/assets/tech/ethereum.svg" },
  { name: "Solidity", icon: "/assets/tech/solidity.svg" },
  { name: "Web3.js", icon: "/assets/tech/web3js.svg" },
  { name: "Hyperledger", icon: "/assets/tech/hyperledger.svg" },
  { name: "IPFS", icon: "/assets/tech/ipfs.svg" },
  { name: "Truffle", icon: "/assets/tech/truffle.svg" },
];

export default function Blockchain() {
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
            <h1 className="text-5xl font-bold mb-6">Blockchain Development</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Implement secure and transparent blockchain solutions for your
              business needs.
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
          Our Blockchain Services
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
              Ready to Build Your Blockchain Solution?
            </h2>
            <p className="text-gray-300">
              Let's discuss how blockchain technology can transform your
              business.
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

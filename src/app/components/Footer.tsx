"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative w-12 h-12"
              >
                <Image
                  src="/assets/emojis/rocket.png"
                  alt="Qmos Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              <span className="ml-3 text-white text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Qmos
              </span>
            </Link>
            <p className="mt-4 text-gray-400">
              Transforming ideas into digital reality with cutting-edge
              technology.
            </p>
            <div className="mt-6 flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white"
              >
                <Image
                  src="/assets/social/linkedin.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white"
              >
                <Image
                  src="/assets/social/twitter.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white"
              >
                <Image
                  src="/assets/social/github.png"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </motion.a>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Image
                src="/assets/emojis/gear.png"
                alt="Services"
                width={20}
                height={20}
                className="mr-2"
              />
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <Image
                    src="/assets/services/web-dev.png"
                    alt="Web"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <Image
                    src="/assets/services/mobile-dev.png"
                    alt="Mobile"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <Image
                    src="/assets/services/cloud-dev.png"
                    alt="Cloud"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Image
                src="/assets/emojis/briefcase.png"
                alt="Company"
                width={20}
                height={20}
                className="mr-2"
              />
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <Image
                    src="/assets/emojis/information.png"
                    alt="About"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <Image
                    src="/assets/emojis/envelope.png"
                    alt="Contact"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <Image
                    src="/assets/emojis/briefcase.png"
                    alt="Careers"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Image
                src="/assets/emojis/globe.png"
                alt="Connect"
                width={20}
                height={20}
                className="mr-2"
              />
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <Image
                    src="/assets/social/linkedin.png"
                    alt="LinkedIn"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <Image
                    src="/assets/social/twitter.png"
                    alt="Twitter"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <Image
                    src="/assets/social/github.png"
                    alt="GitHub"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Qmos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

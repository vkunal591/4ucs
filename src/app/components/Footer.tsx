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
                className="relative w-20 h-20"
              >
                <Image
                  src="/assets/logo/logofinal.png"
                  alt="4U Consultant Services"
                  fill
                  className="object-contain filter invert brightness-0 scale-150"
                  priority
                />
              </motion.div>
              <span className="ml-3 text-white text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Consultant Services
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
                  src="/assets/icons/call.png"
                  alt="4U Consultant Services"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </motion.a>
              <motion.a
                href="mailto:4uconsultantservice@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white"
              >
                <Image
                  src="/assets/icons/mail.png"
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
                  src="/assets/icons/whatsapp.png"
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
                src="/assets/icons/gear.png"
                alt="Services"
                width={20}
                height={20}
                className="mr-2 filter brightness-0 invert"
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
                    src="/assets/icons/webdev.png"
                    alt="Web"
                    width={16}
                    height={16}
                    className="mr-2 filter brightness-0 invert"
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
                    src="/assets/icons/mobile.png"
                    alt="Mobile"
                    width={16}
                    height={16}
                    className="mr-2 filter brightness-0 invert"
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
                    src="/assets/icons/cloud.png"
                    alt="Cloud"
                    width={16}
                    height={16}
                    className="mr-2 filter brightness-0 invert"
                  />
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Image
                src="/assets/icons/company.png"
                alt="Company"
                width={20}
                height={20}
                className="mr-2 filter brightness-0 invert"
              />
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <Image
                    src="/assets/icons/about.png"
                    alt="About"
                    width={16}
                    height={16}
                    className="mr-2 filter brightness-0 invert"
                  />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <Image
                    src="/assets/icons/contact.png"
                    alt="Contact"
                    width={16}
                    height={16}
                    className="mr-2 filter brightness-0 invert"
                  />
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <Image
                    src="/assets/icons/career.png"
                    alt="Careers"
                    width={16}
                    height={16}
                    className="mr-2 filter brightness-0 invert"
                  />
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Image
                src="/assets/icons/connect.png"
                alt="Connect"
                width={20}
                height={20}
                className="mr-2 filter brightness-0 invert"
              />
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.facebook.com/4uconsultantservice"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <Image
                    src="/assets/icons/linkedin.png"
                    alt="LinkedIn"
                    width={16}
                    height={16}
                    className="mr-2 filter brightness-0 invert"
                  />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/4u-consultant-service"
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <Image
                    src="/assets/icons/facebook.png"
                    alt="Facebook"
                    width={16}
                    height={16}
                    className="mr-2 filter brightness-0 invert"
                  />
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/4uconsultantservice?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="text-gray-400 hover:text-white flex items-center"
                >
                  <Image
                    src="/assets/icons/insta.png"
                    alt="Instagram"
                    width={16}
                    height={16}
                    className="mr-2 filter brightness-0 invert"
                  />
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} 4U Consultant Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

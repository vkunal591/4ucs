"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    name: "Web Development",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/globe-with-meridians.png",
    path: "/services/web-development",
    id: "web-development",
  },
  {
    name: "App Development",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/mobile-phone.png",
    path: "/services/app-development",
    id: "app-development",
  },
  {
    name: "Artificial Intelligence",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/robot.png",
    path: "/services/artificial-intelligence",
    id: "ai",
  },
  {
    name: "Saas Development",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/cloud.png",
    path: "/services/saas-development",
    id: "saas",
  },
  {
    name: "Blockchain Development",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/chain.png",
    path: "/services/blockchain-development",
    id: "blockchain",
  },
  {
    name: "CRM Development",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/briefcase.png",
    path: "/services/crm-development",
    id: "crm",
  },
  {
    name: "UX/UI Designing",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/artist-palette.png",
    path: "/services/ux-ui-designing",
    id: "ux-ui",
  },
  {
    name: "Digital Marketing",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/megaphone.png",
    path: "/services/digital-marketing",
    id: "digital-marketing",
  },
  {
    name: "API Development",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/gear.png",
    path: "/services/api-development",
    id: "api",
  },
];

const industries = [
  {
    id: "health-care",
    name: "Health Care",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/hospital.png",
    path: "/industries/health-care",
  },
  {
    id: "oil-gas-energy",
    name: "Oil & Gas Energy",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/oil-drum.png",
    path: "/industries/oil-gas-energy",
  },
  {
    id: "retails-e-commerce",
    name: "Retails & E-Commerce",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/shopping-cart.png",
    path: "/industries/retails-e-commerce",
  },
  {
    id: "real-estate-construction",
    name: "Real Estate & Construction",
    path: "/industries/real-estate-construction",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/house.png",
  },
  {
    id: "finance-banking",
    name: "Finance & Banking",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/money-bag.png",
    path: "/industries/finance-banking",
  },
  {
    id: "government-smart-cities",
    name: "Government & Smart Cities",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/cityscape.png",
    path: "/industries/government-smart-cities",
  },
  {
    id: "education-service",
    name: "Education Service",
    image:
      "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/graduation-cap.png",
    path: "/industries/education-service",
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Our Work", href: "/our-work" },
  { name: "Contact", href: "/contact-us" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeSubmenuId, setActiveSubmenuId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (submenuId: string) => {
    setActiveSubmenuId(submenuId);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveSubmenuId(null);
    }, 500);
  };

  const handleClick = (submenuId: string) => {
    setActiveSubmenuId((prev) => (prev === submenuId ? null : submenuId));
  };

  const handleLinkClick = () => setActiveSubmenuId(null);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative w-20 h-20"
              >
                <Image
                  src="/assets/logo/logo.png"
                  alt="4U Consultant Services"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              <span className="ml-3 text-white text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Consultant Services
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? "text-white bg-blue-500/20"
                      : "text-gray-300 hover:text-white hover:bg-blue-500/10"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/90 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === link.href
                      ? "text-white bg-blue-500/20"
                      : "text-gray-300 hover:text-white hover:bg-blue-500/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

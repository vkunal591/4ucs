"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    id: "healthcare",
    title: "Healthcare",
    icon: "/assets/icons/healthcare.png",
    description:
      "Digital transformation solutions for modern healthcare delivery",
    solutions: [
      "Electronic Health Records (EHR)",
      "Telemedicine Platforms",
      "Medical IoT Solutions",
      "Healthcare Analytics",
      "Patient Management Systems",
      "Medical Imaging AI",
    ],
    bgImage: "/assets/icons/healthcare-.png",
  },
  {
    id: "finance",
    title: "Finance & Banking",
    icon: "/assets/icons/finance.png",
    description: "Innovative fintech solutions for the modern financial sector",
    solutions: [
      "Digital Banking Platforms",
      "Payment Processing Systems",
      "Fraud Detection AI",
      "Investment Analytics",
      "Blockchain Solutions",
      "Regulatory Compliance",
    ],
    bgImage: "/assets/icons/finance-.png",
  },
  {
    id: "retail",
    title: "Retail & E-commerce",
    icon: "/assets/icons/retail.png",
    description: "End-to-end digital solutions for modern retail operations",
    solutions: [
      "E-commerce Platforms",
      "Inventory Management",
      "POS Systems",
      "Customer Analytics",
      "Supply Chain Solutions",
      "Loyalty Programs",
    ],
    bgImage: "/assets/icons/retail-.png",
  },
  {
    id: "education",
    title: "Education",
    icon: "/assets/icons/education.png",
    description: "Digital learning solutions for modern education",
    solutions: [
      "Learning Management Systems",
      "Virtual Classrooms",
      "Student Analytics",
      "Educational Content Platforms",
      "Assessment Tools",
      "Administrative Systems",
    ],
    bgImage: "/assets/icons/education-.png",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: "/assets/icons/manufacturing.png",
    description: "Smart manufacturing solutions for Industry 4.0",
    solutions: [
      "IoT Manufacturing",
      "Predictive Maintenance",
      "Supply Chain Optimization",
      "Quality Control AI",
      "Inventory Management",
      "Production Analytics",
    ],
    bgImage: "/assets/icons/manufacturing-.png",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    icon: "/assets/icons/realstate.png",
    description: "Digital solutions for modern real estate operations",
    solutions: [
      "Property Management Systems",
      "Virtual Tours",
      "Smart Building IoT",
      "Real Estate Analytics",
      "Tenant Portals",
      "Maintenance Management",
    ],
    bgImage: "/assets/icons/real-estate-.png",
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored solutions for diverse industry needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare",
                description:
                  "Innovative solutions for modern healthcare providers.",
                icon: "/assets/icons/healthcare.png",
                solutions: [
                  "Electronic Health Records",
                  "Telemedicine Platforms",
                  "Patient Management Systems",
                  "Medical Analytics",
                ],
              },
              {
                title: "Finance",
                description:
                  "Secure and efficient financial technology solutions.",
                icon: "/assets/icons/finance.png",
                solutions: [
                  "Digital Banking",
                  "Payment Processing",
                  "Risk Management",
                  "Financial Analytics",
                ],
              },
              {
                title: "Retail",
                description: "E-commerce and retail management solutions.",
                icon: "/assets/icons/retail.png",
                solutions: [
                  "Online Marketplaces",
                  "Inventory Management",
                  "Customer Analytics",
                  "POS Systems",
                ],
              },
            ].map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-xl backdrop-blur-sm border border-blue-500/20"
              >
                <div className="text-4xl mb-4 filter invert brightness-0">
                  {" "}
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={industry.icon}
                      alt={industry.title}
                      fill
                      className="object-contain filter invert brightness-0"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {industry.title}
                </h3>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.solutions.map((solution) => (
                    <li
                      key={solution}
                      className="text-gray-400 flex items-center"
                    >
                      <span className="mr-2">✓</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              More Industries
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Education", icon: "/assets/icons/education.png" },
              {
                title: "Manufacturing",
                icon: "/assets/icons/manufacturing.png",
              },
              { title: "Logistics", icon: "/assets/icons/healthcare.png" },
              { title: "Real Estate", icon: "/assets/icons/healthcare.png" },
            ].map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl backdrop-blur-sm border border-blue-500/20 text-center"
              >
                <div className="text-4xl mb-4">
                  {" "}
                  <div className="relative m-auto w-12 h-12">
                    <Image
                      src={industry.icon}
                      alt={industry.title}
                      fill
                      className="object-contain filter invert brightness-0"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {industry.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Success Stories
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "HealthCare Plus",
                industry: "Healthcare",
                result: "40% increase in patient engagement",
              },
              {
                company: "FinTech Solutions",
                industry: "Finance",
                result: "50% reduction in processing time",
              },
              {
                company: "Retail Pro",
                industry: "Retail",
                result: "60% growth in online sales",
              },
            ].map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-xl backdrop-blur-sm border border-blue-500/20"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {story.company}
                </h3>
                <p className="text-gray-400 mb-4">{story.industry}</p>
                <p className="text-gray-300">{story.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-12 rounded-xl backdrop-blur-sm border border-blue-500/20"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how we can help your business thrive in the digital
              age.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

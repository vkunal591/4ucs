"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import HeroSection from "./components/HeroSection";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div ref={mainRef} className="min-h-screen">
      <HeroSection />

      {/* Section 1: What We Do */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              What We Do
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Empowering businesses with cutting-edge technology solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description:
                  "Modern, responsive, and scalable web applications",
                icon: "/assets/solutions/web.svg",
              },
              {
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications",
                icon: "/assets/solutions/mobile.svg",
              },
              {
                title: "Cloud Services",
                description: "Scalable and secure cloud infrastructure",
                icon: "/assets/solutions/cloud.svg",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-xl backdrop-blur-sm border border-blue-500/20"
              >
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="mb-6 filter brightness-0 invert"
                  />
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Technology Stack */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Our Technology Stack
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Building with modern and reliable technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "React", icon: "/assets/tech/react.svg" },
              { name: "Next.js", icon: "/assets/tech/nextjs.svg" },
              { name: "Node.js", icon: "/assets/tech/nodejs.svg" },
              { name: "Python", icon: "/assets/tech/python.svg" },
              { name: "AWS", icon: "/assets/tech/aws.svg" },
              { name: "Azure", icon: "/assets/tech/azure.svg" },
              { name: "Docker", icon: "/assets/tech/docker.svg" },
              { name: "Kubernetes", icon: "/assets/tech/kubernetes.svg" },
              { name: "MongoDB", icon: "/assets/tech/mongodb.svg" },
              { name: "PostgreSQL", icon: "/assets/tech/postgresql.svg" },
              { name: "TypeScript", icon: "/assets/tech/typescript.svg" },
              { name: "GraphQL", icon: "/assets/tech/graphql.svg" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center group backdrop-blur-sm bg-blue-500/10 p-6 rounded-xl border border-blue-500/20"
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
      </section>

      {/* Section 3: Industries We Serve */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Industries We Serve
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tailored solutions for diverse industry needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare",
                description: "Digital health solutions and medical software",
                icon: "/assets/industries/healthcare.svg",
              },
              {
                title: "Finance",
                description: "FinTech and banking solutions",
                icon: "/assets/industries/finance.svg",
              },
              {
                title: "Retail",
                description: "E-commerce and retail management systems",
                icon: "/assets/industries/retail.svg",
              },
            ].map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-xl backdrop-blur-sm border border-blue-500/20"
              >
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={industry.icon}
                    alt={industry.title}
                    width={64}
                    height={64}
                    className="mb-6 filter brightness-0 invert"
                  />
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Process */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Our Process
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A systematic approach to delivering excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Discovery",
                description: "Understanding your needs and goals",
                icon: "/assets/process/discovery.svg",
              },
              {
                title: "Planning",
                description: "Creating detailed project roadmap",
                icon: "/assets/process/planning.svg",
              },
              {
                title: "Development",
                description: "Building with precision and care",
                icon: "/assets/process/development.svg",
              },
              {
                title: "Delivery",
                description: "Ensuring successful deployment",
                icon: "/assets/process/delivery.svg",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-xl backdrop-blur-sm border border-blue-500/20"
              >
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={48}
                    height={48}
                    className="mb-6 filter brightness-0 invert"
                  />
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Us */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Why Choose Us
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Excellence in every aspect of our service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Highly skilled professionals with years of experience",
                icon: "/assets/why/team.svg",
              },
              {
                title: "Quality Focus",
                description:
                  "Commitment to delivering the highest quality solutions",
                icon: "/assets/why/quality.svg",
              },
              {
                title: "Client-Centric",
                description: "Your success is our top priority",
                icon: "/assets/why/client.svg",
              },
            ].map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-xl backdrop-blur-sm border border-blue-500/20"
              >
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={reason.icon}
                    alt={reason.title}
                    width={64}
                    height={64}
                    className="mb-6 filter brightness-0 invert"
                  />
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Our Expertise */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Our Expertise
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Specialized knowledge in key technology areas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Computing",
                description: "Scalable and secure cloud solutions",
                icon: "/assets/expertise/cloud.svg",
              },
              {
                title: "AI & ML",
                description: "Intelligent solutions for business growth",
                icon: "/assets/expertise/ai.svg",
              },
              {
                title: "Cybersecurity",
                description: "Protecting your digital assets",
                icon: "/assets/expertise/security.svg",
              },
            ].map((expertise, index) => (
              <motion.div
                key={expertise.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-xl backdrop-blur-sm border border-blue-500/20"
              >
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={expertise.icon}
                    alt={expertise.title}
                    width={64}
                    height={64}
                    className="mb-6 filter brightness-0 invert"
                  />
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {expertise.title}
                  </h3>
                  <p className="text-gray-300">{expertise.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Client Success */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Client Success
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Transforming businesses through technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Increased Efficiency",
                description: "Streamlined operations and improved productivity",
                icon: "/assets/success/efficiency.svg",
              },
              {
                title: "Cost Reduction",
                description: "Optimized processes and reduced expenses",
                icon: "/assets/success/cost.svg",
              },
              {
                title: "Business Growth",
                description: "Scalable solutions for expansion",
                icon: "/assets/success/growth.svg",
              },
            ].map((success, index) => (
              <motion.div
                key={success.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-xl backdrop-blur-sm border border-blue-500/20"
              >
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={success.icon}
                    alt={success.title}
                    width={64}
                    height={64}
                    className="mb-6 filter brightness-0 invert"
                  />
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {success.title}
                  </h3>
                  <p className="text-gray-300">{success.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Innovation Hub */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Innovation Hub
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Pushing the boundaries of technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "R&D",
                description: "Continuous research and development",
                icon: "/assets/innovation/research.svg",
              },
              {
                title: "Emerging Tech",
                description: "Exploring cutting-edge technologies",
                icon: "/assets/innovation/tech.svg",
              },
              {
                title: "Future Vision",
                description: "Shaping tomorrow's solutions",
                icon: "/assets/innovation/vision.svg",
              },
            ].map((innovation, index) => (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-xl backdrop-blur-sm border border-blue-500/20"
              >
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={innovation.icon}
                    alt={innovation.title}
                    width={64}
                    height={64}
                    className="mb-6 filter brightness-0 invert"
                  />
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {innovation.title}
                  </h3>
                  <p className="text-gray-300">{innovation.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Global Reach */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Global Reach
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Serving clients worldwide with excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Presence",
                description: "Operating across multiple continents",
                icon: "/assets/global/presence.svg",
              },
              {
                title: "Local Expertise",
                description: "Understanding regional markets",
                icon: "/assets/global/expertise.svg",
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock assistance",
                icon: "/assets/global/support.svg",
              },
            ].map((global, index) => (
              <motion.div
                key={global.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-xl backdrop-blur-sm border border-blue-500/20"
              >
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={global.icon}
                    alt={global.title}
                    width={64}
                    height={64}
                    className="mb-6 filter brightness-0 invert"
                  />
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {global.title}
                  </h3>
                  <p className="text-gray-300">{global.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300">
              Let's build something extraordinary together
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
                Start Your Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

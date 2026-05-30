"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-10 py-5 fixed w-full bg-black/40 backdrop-blur-md z-50">
        <h1 className="text-xl font-bold">Velvora</h1>
        <div className="space-x-6 text-gray-300">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* HERO */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-6">

        <motion.h1
          className="text-6xl font-bold"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We Build Modern Websites
        </motion.h1>

        <motion.p
          className="text-gray-400 mt-4 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Velvora Solutions - Web Development Agency
        </motion.p>

        <motion.button
          className="mt-8 px-6 py-3 bg-purple-600 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>

      </div>

      {/* SERVICES */}
      <section id="services" className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8 px-10">

          {["Web Development", "UI/UX Design", "SEO Optimization"].map((item, i) => (
            <motion.div
              key={i}
              className="p-8 bg-gray-900 rounded-xl"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.div>
          ))}

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 text-center px-10">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We are a modern web development agency focused on building fast,
          responsive, and scalable websites for businesses and startups.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="text-gray-400">velvorasolutions@gmail.com</p>
      </section>

    </div>
  );
}
"use client";
import Navbar from "./components/Navbar";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["services", "about", "contact"];

      sections.forEach((sec) => {
        const element = document.getElementById(sec);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top < 200) setActive(sec);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full flex justify-between items-center px-6 md:px-10 py-5 bg-black/40 backdrop-blur-md z-50">

      <h1 className="font-bold text-lg">Velvora</h1>

      <div className="hidden md:flex space-x-6">

        <a
          href="#services"
          className={active === "services" ? "text-white" : "text-gray-400"}
        >
          Services
        </a>

        <a
          href="#about"
          className={active === "about" ? "text-white" : "text-gray-400"}
        >
          About
        </a>

        <a
          href="#contact"
          className={active === "contact" ? "text-white" : "text-gray-400"}
        >
          Contact
        </a>

      </div>

    </div>
  );
}
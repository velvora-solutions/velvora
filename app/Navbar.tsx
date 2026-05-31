"use client";

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <h1 className="text-yellow-400 font-bold text-xl">
          Velvora Solutions
        </h1>

        <nav className="flex gap-6 text-sm text-white">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>
    </header>
  );
}
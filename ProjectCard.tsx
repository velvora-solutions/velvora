"use client";

import { useRef } from "react";

export default function ProjectCard({ title, img }: any) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: any) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -20;
    const rotateY = (x / rect.width - 0.5) * 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const reset = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateX(0) rotateY(0) scale(1)";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="transition-all duration-200 bg-gray-900 rounded-xl overflow-hidden shadow-xl"
      style={{ transformStyle: "preserve-3d" }}
    >
      <img src={img} className="h-48 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
}
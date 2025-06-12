import { useState, useEffect } from "react";
import { FaLeaf, FaShoppingCart, FaBook, FaHandsHelping } from "react-icons/fa";
import Carousel from "./Carousel";

import Kitchen from "../assets/pic2.jpg";
import Solar from "../assets/pic3.jpg";
import Plant from "../assets/pic4.jpg";
import Tour from "../assets/pic5.jpg";

const HeroSection = () => {

  return (
    <section className="relative bg-gradient-to-b from-white to-green-50 dark:from-green-900 dark:to-gray-900 text-green-900 dark:text-green-500 overflow-hidden transition-colors duration-500">
      {/* Decorative SVG */}
      <svg
        className="absolute top-0 left-0 w-64 opacity-10 dark:opacity-20"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle
          cx="50"
          cy="50"
          r="50"
          className="fill-green-600 dark:fill-green-400"
        />
      </svg>

      {/* Carousel */}
      <Carousel images={[Kitchen, Solar, Plant, Tour]} />

      {/* Headline */}
      <div className="text-center px-4 py-8 md:py-12" data-aos="fade-up">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Innovating Agriculture, Empowering Communities
        </h1>
        <p className="text-sm md:text-lg mb-8 text-green-700 dark:text-gray-300">
          Plantosphere Pvt. Ltd. delivers sustainable agri-food solutions
          through cutting-edge products, training, and research.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            {
              href: "/services",
              icon: <FaLeaf />,
              label: "Explore Our Solutions",
            },
            {
              href: "/products",
              icon: <FaShoppingCart />,
              label: "Shop Our Products",
            },
            {
              href: "/training",
              icon: <FaHandsHelping />,
              label: "Join Our Training",
            },
            {
              href: "/journal",
              icon: <FaBook />,
              label: "Submit to Our Journal",
            },
          ].map(({ href, icon, label }) => (
            <a
              key={href}
              href={href}
              className="w-29 h-10 text-[10px] md:text-[16px] md:w-48 md:h-14 bg-green-600 text-white flex items-center justify-center gap-1 md:gap-2  rounded-full shadow-md hover:bg-green-700 dark:hover:bg-green-800 transition duration-300"
            >
              {icon} {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

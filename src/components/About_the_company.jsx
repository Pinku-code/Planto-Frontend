import React from "react";
import { FaArrowRight } from "react-icons/fa";
import TeamImg from "../assets/Farm.jpg"; 
import About_intro from "./About_intro"

const AboutSection = () => {
  return (
    <section
      className="bg-white text-green-900 dark:bg-gray-900 dark:text-white py-12 px-4 md:px-16"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex flex-col md:flex-1 mx-auto justify-center items-center gap-4">
          
          <About_intro />

          <a
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 dark:bg-green-700 text-white rounded-full shadow-md hover:bg-green-700 dark:hover:bg-green-800 transition duration-300"
          >
            Read More <FaArrowRight />
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 w-full">
          <img
            src={TeamImg}
            alt="Our Team with Farmers"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from "react";
import farner from "../assets/Farmer.jpg";

const AboutUsSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-green-900 dark:text-green-300 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="md:w-1/2" data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-6 dark:text-green-400">
            Plantos
          </h2>
          <p className="text-lg leading-relaxed mb-6 dark:text-gray-200">
            Our mission is to drive sustainability in agriculture and food processing. We specialize in kitchen garden design, landscaping, renewable energy, carbon credit consulting, agri-tourism, and government project consultancy. Collaborating with ICAR-CISH and IIT Kharagpur, we’re building a resilient agri-food ecosystem.
          </p>
          <a
            href="/plantos"
            className="inline-block bg-green-600 dark:bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-green-700 dark:hover:bg-green-800 transition duration-300"
          >
            Read more
          </a>
        </div>

        {/* Visual Content */}
        <div className="md:w-1/2" data-aos="fade-left">
          <img
            src={farner}
            alt="Farm tour or workshop"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

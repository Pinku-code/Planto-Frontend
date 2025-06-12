import React from "react";
import farmer from "../assets/Farm.jpg";

const ServicesSection = () => {
  return (
    <section className="bg-green-50 dark:bg-gray-900 text-green-900 dark:text-green-200 py-12 px-6 md:px-16 lg:px-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Visual */}
        <div className="md:w-1/2" data-aos="fade-right">
          <img
            src={farmer} // Replace with your collage image path
            alt="Collage of services"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2" data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-400">
            Services
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-green-900 dark:text-gray-200">
            From kitchen garden design and agri-tourism to food processing and carbon credit consulting, our services empower farmers, businesses, and communities. We also offer renewable energy solutions and bulk raw material supply.
          </p>
          <a
            href="/services"
            className="inline-block bg-green-600 dark:bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-green-700 dark:hover:bg-green-800 transition duration-300"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

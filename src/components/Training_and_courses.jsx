import React from "react";
import farmer from "../assets/FarmingTechnique.jpg";

const TrainingCoursesSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-green-900 dark:text-green-200 py-12 px-6 md:px-16 lg:px-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Visual */}
        <div className="md:w-1/2 order-last md:order-first" data-aos="fade-left">
          <img
            src={farmer} // Replace with your training session image path
            alt="Training session or certificate"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2" data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-6 text-green-800 dark:text-green-400">
            Training & Courses
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-green-900 dark:text-gray-200">
            Join our affordable programs in kitchen gardening, organic farming, food processing, and sustainable packaging. Online and hybrid options with certifications.
          </p>
          <a
            href="/training"
            className="inline-block bg-green-600 dark:bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-green-700 dark:hover:bg-green-800 transition duration-300"
          >
            Enroll Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrainingCoursesSection;

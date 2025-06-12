import React from 'react';
import collaborateImg from '../assets/Farm.jpg'; // Replace with real image

const CollaborationSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-green-900 dark:text-green-300 px-4 py-12 md:py-16" data-aos="fade-up">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-green-500">Collaborate with Us</h2>
          <p className="text-lg mb-4 dark:text-gray-200">
            Partner with us for impactful research, hands-on training, or carbon credit consulting. We actively collaborate with academia, NGOs, and businesses to build a more sustainable agri-food ecosystem.
          </p>
          <a
            href="/collaborate"
            className="inline-block mt-2 px-6 py-3 bg-green-600 dark:bg-green-700 text-white rounded-full shadow hover:bg-green-700 dark:hover:bg-green-800 transition"
          >
            Collaborate with Us
          </a>
        </div>

        {/* Visual */}
        <div className="flex-1">
          <img
            src={collaborateImg}
            alt="Partnership event"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;

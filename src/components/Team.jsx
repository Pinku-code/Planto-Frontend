import React from 'react';
import teamPhoto from '../assets/Farmer.jpg'; // Replace with real team image or headshots

const TeamSection = () => {
  return (
    <section className="bg-green-50 dark:bg-gray-900 text-green-900 dark:text-green-200 px-4 py-12 md:py-16 transition-colors duration-500" data-aos="fade-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Visual */}
        <div className="flex-1">
          <img
            src={teamPhoto}
            alt="Our Team"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800 dark:text-green-500">
            Our Team
          </h2>
          <p className="text-lg mb-4 text-green-900 dark:text-gray-200">
            Meet our passionate team, led by <strong>Ozair Alam</strong>, driving innovation in agri-food systems. From ICAR experts to dedicated field coordinators, we are committed to creating real impact across communities.
          </p>

          {/* CTA */}
          <a
            href="/team"
            className="inline-block mt-2 px-6 py-3 bg-green-600 dark:bg-green-700 text-white rounded-full shadow hover:bg-green-700 dark:hover:bg-green-800 transition duration-300"
          >
            Meet the Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

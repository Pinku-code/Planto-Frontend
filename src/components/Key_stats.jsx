import React from 'react';

const stats = [
  { label: 'Farmers Supported', value: '500+' },
  { label: 'Training Programs', value: '10+' },
  { label: 'Sustainable Products', value: '5+' },
];

const KeyStats = () => {
  return (
    <section
      className="bg-white dark:bg-gray-900 py-12 px-4 md:px-8 transition-colors duration-500"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-800 dark:text-green-500">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-green-50 dark:bg-gray-800 border border-green-200 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-md transition duration-300"
            >
              <p className="text-4xl font-bold text-green-700 dark:text-gray-200 mb-2">
                {stat.value}
              </p>
              <p className="text-lg font-medium text-green-900 dark:text-green-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyStats;

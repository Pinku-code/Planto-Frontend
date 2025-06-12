import React from 'react';
import BlogThumbnail from '../assets/Farmer.jpg'; // Replace with your blog image

const BlogSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-green-900 dark:text-green-300 px-4 py-12 md:py-16" data-aos="fade-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Visual */}
        <div className="flex-1">
          <img
            src={BlogThumbnail}
            alt="Latest Blog Post"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-green-500">
            Plantosphere Blog
          </h2>
          <p className="text-lg mb-2 dark:text-gray-200">
            Stay updated with insights on kitchen gardening, sustainable agriculture, and industry trends.
          </p>
          <p className="text-green-800 dark:text-gray-300 font-medium mb-4">
            <strong className='dark:text-green-600'>Latest Post:</strong> “5 Tips for Urban Kitchen Gardens”
          </p>
          
          {/* CTA */}
          <a
            href="/blog"
            className="inline-block mt-2 px-6 py-3 bg-green-600 dark:bg-green-700 text-white rounded-full shadow hover:bg-green-700 dark:hover:bg-green-800 transition"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

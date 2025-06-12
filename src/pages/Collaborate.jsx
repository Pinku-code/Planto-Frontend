import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Collaborate() {
  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-6xl mx-auto mt-14">
        <h2 className="text-4xl font-bold text-center text-green-500 mb-4">
          Let's Grow Together
        </h2>
        <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Join us in our mission to transform sustainable agriculture through collaboration and innovation.
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-semibold text-green-700 dark:text-green-600 mb-4">
              Partnership Opportunities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-green-600 mb-3">
                  Research & Development
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Collaborate on innovative agricultural research projects and sustainable farming solutions.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-green-600 mb-3">
                  Technology Integration
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Partner in developing and implementing cutting-edge agricultural technologies.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-green-600 mb-3">
                  Supply Chain
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Join our sustainable supply chain network for agricultural products.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-green-600 mb-3">
                  Training & Education
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Collaborate on training programs and educational initiatives.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-green-700 dark:text-green-600 mb-4">
              Why Partner With Us?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">
                  Access to cutting-edge agricultural technologies and sustainable solutions
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">
                  Extensive network of farmers and agricultural communities
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">
                  Expertise in sustainable agricultural practices
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 dark:text-gray-300">
                  Strong focus on community impact and environmental sustainability
                </span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-green-700 dark:text-green-600 mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss how we can work together to create a more sustainable future in agriculture.
            </p>
            <a
              href="/contact"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

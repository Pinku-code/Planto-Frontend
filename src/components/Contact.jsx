import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-green-50 dark:bg-gray-900 text-green-900 dark:text-green-300 px-4 py-12 md:py-16" id="contact" data-aos="fade-up">
      <div className="max-w-4xl mx-auto flex flex-col gap-8 items-center text-center">
        {/* Heading & Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-green-500">Get in Touch</h2>
          <p className="text-lg dark:text-gray-200">
            Have questions or ideas? Reach out to discuss products, services, or partnerships.
          </p>
        </div>

        {/* Contact Form */}
        <form className="w-full max-w-xl bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-green-300 dark:border-green-600 rounded-md px-4 py-2 bg-white dark:bg-gray-700 text-green-900 dark:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-green-300 dark:border-green-600 rounded-md px-4 py-2 bg-white dark:bg-gray-700 text-green-900 dark:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-green-300 dark:border-green-600 rounded-md px-4 py-2 bg-white dark:bg-gray-700 text-green-900 dark:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 dark:bg-green-700 text-white py-2 rounded-md hover:bg-green-700 dark:hover:bg-green-800 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="text-sm mt-4 dark:text-green-400">
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:connect@plantosphere.in" className="text-green-700 dark:text-green-500 hover:underline">
              connect@plantosphere.in
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+91XXXXXXXXXX" className="text-green-700 dark:text-green-500 hover:underline">
              +91-XXXXXXXXXX
            </a>
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="/contact"
          className="mt-4 inline-block px-6 py-3 bg-green-600 dark:bg-green-700 text-white rounded-full shadow hover:bg-green-700 dark:hover:bg-green-800 transition"
        >
          Go to Full Contact Page
        </a>
      </div>
    </section>
  );
};

export default ContactSection;

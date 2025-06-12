// --- FILE: src/pages/Services.jsx ---
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react"; // Optional: Replace with custom SVG
import { getServices } from "../lib/api";


export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch services. Please try again later.");
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-7xl mx-auto mt-14">
        <h2 className="text-4xl font-bold text-center text-green-700 dark:text-green-500 mb-2">
          End-to-End Agri-Food & Sustainability Solutions
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-200 mb-12">
          From farm to market, we drive growth with innovative services.
        </p>

        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading services...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-600">
            <p>{error}</p>
          </div>
        ) : services.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>No services available at the moment.</p>
          </div>
        ) : (
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                className="relative bg-white dark:bg-gray-900 border-l-4 border-green-600 dark:border-green-500 p-6 rounded-2xl shadow-lg hover:shadow-green-400 transition duration-300 overflow-hidden"
              >
                {/* Leafy Image */}
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-40 object-cover rounded-md mb-4 shadow-md"
                />

                {/* Title */}
                <motion.h3
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-xl font-bold text-green-800 dark:text-green-400 mb-2 flex items-center gap-2"
                >
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  >
                    <Leaf className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </motion.span>
                  {service.name}
                </motion.h3>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-2">
                  {service.description}
                </p>

                {/* More Info Toggle */}
                <button
                  onClick={() => setExpanded(expanded === service.id ? null : service.id)}
                  className="text-green-700 dark:text-green-400 text-sm underline hover:text-green-900 dark:hover:text-lime-100 mb-2"
                >
                  {expanded === service.id ? "Hide Details" : "View More"}
                </button>

                {/* Expanded Info */}
                {expanded === service.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-600 dark:text-gray-300 text-sm mt-2"
                  >
                    {service.description}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Floating WhatsApp Icon */}
        <a
          href="https://wa.me/919905016380" // Replace with your actual number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-all duration-300"
          aria-label="Chat with us on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M16 0C7.2 0 .1 7.1.1 15.9c0 3.2.9 6.1 2.5 8.7L0 32l7.7-2.5c2.5 1.3 5.3 2.1 8.3 2.1 8.8 0 15.9-7.1 15.9-16C32 7.1 24.9 0 16 0zm0 29.1c-2.5 0-4.8-.7-6.8-1.8l-.5-.3-4.6 1.5 1.5-4.5-.3-.5c-1.3-2-2-4.3-2-6.6C3.3 8.2 8.9 2.6 16 2.6c7.1 0 12.7 5.6 12.7 12.6 0 7-5.6 12.6-12.7 12.6zm7.1-9.5c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.7-.2-1 .2s-1.1 1.2-1.3 1.4c-.2.2-.5.2-.9 0s-1.7-.6-3.2-2c-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.8.2-.3.1-.6 0-.9-.1-.3-1-2.4-1.3-3.2-.3-.8-.6-.7-.8-.7h-.7c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 3c0 1.8 1.2 3.5 1.4 3.7.2.2 2.4 3.7 5.8 5.1 3.4 1.4 3.4.9 4 .9.6 0 2-1 2.2-1.5.2-.5.2-1 .1-1.1 0-.1-.4-.2-.8-.4z" />
          </svg>
        </a>
      </section>
      <Footer />
    </>
  );
}

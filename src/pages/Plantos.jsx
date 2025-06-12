import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PlantosPage() {
  return (
    <>
    <Header/>
    <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-white dark:from-green-900 dark:to-gray-900 min-h-screen px-4 sm:px-10 py-24 text-gray-800 dark:text-gray-100 font-[Lora]">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-lime-300 rounded-full blur-2xl opacity-20 bottom-20 right-10 animate-bounce"></div>
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl font-bold text-green-700 dark:text-lime-300 text-center mb-12"
      >
        Welcome to Plantos
      </motion.h1>

      {/* Intro Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="max-w-3xl mx-auto text-xl sm:text-2xl text-center italic tracking-wide leading-relaxed"
      >
        Empowering communities through sustainable agriculture, smart gardening, and organic living. Plantos is your gateway to a greener, healthier future.
      </motion.p>

      {/* Core Features Section */}
      <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {["Kitchen Garden Kits", "Urban Greening", "Training & Certification", "Organic Products", "Carbon Credit Advisory", "Agri-Tourism"].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-white dark:bg-green-950 bg-opacity-80 rounded-2xl p-6 shadow-xl hover:shadow-green-200 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-green-700 dark:text-lime-200 mb-2">
              {item}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Discover innovative approaches, tools, and community-driven solutions that bring you closer to nature.
            </p>
          </motion.div>
        ))}
      </div>

      {/* Footer Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-24 text-center text-lg sm:text-xl italic text-green-600 dark:text-lime-400"
      >
        "Let’s grow together — one seed, one garden, one community at a time."
      </motion.div>
    </div>
    <Footer />
    </>
  );
}

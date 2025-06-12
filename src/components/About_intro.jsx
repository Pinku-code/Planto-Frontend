import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PlantosphereIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative w-full mx-auto mb-8" ref={ref}>
      {/* Paragraph */}
      <p className="text-lg sm:text-xl text-green-800 dark:text-lime-100 font-[Lora] italic tracking-wide leading-relaxed text-center selection:bg-green-100 selection:text-green-900">
        Plantosphere Pvt. Ltd. is a registered agribusiness startup
        revolutionizing India’s agriculture and food processing sectors. We
        empower farmers and communities through sustainable practices,
        innovative products, and knowledge-sharing.
      </p>

      {/* Animated Leaf SVG underline */}
      <motion.svg
        viewBox="0 0 200 20"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 h-6 w-48 text-green-500 dark:text-lime-400"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isInView ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.path
          d="M10 10 C 40 20, 60 0, 90 10 C 120 20, 140 0, 170 10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.circle
          cx="10"
          cy="10"
          r="2"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        />
        <motion.circle
          cx="90"
          cy="10"
          r="2"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          transition={{ delay: 1.3, duration: 0.4 }}
        />
        <motion.circle
          cx="170"
          cy="10"
          r="2"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          transition={{ delay: 1.4, duration: 0.4 }}
        />
      </motion.svg>

    </div>
  );
}

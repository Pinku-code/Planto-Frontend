import React from "react";
import {
  FaSeedling,
  FaPepperHot,
  FaGlassWhiskey,
  FaLeaf,
  FaShoppingBag,
} from "react-icons/fa";
import { GiFlour, GiFruitBowl } from "react-icons/gi";
import { Marquee } from "@/components/magicui/marquee";

const products = [
  { name: "Kitchen Garden Kits", icon: <FaSeedling /> },
  { name: "Organic Spices", icon: <FaPepperHot /> },
  { name: "Ice Apple Juice", icon: <FaGlassWhiskey /> },
  { name: "Multi-Grain Flour", icon: <GiFlour /> },
  { name: "Health Supplements", icon: <GiFruitBowl /> },
  { name: "Bulk: Jute, Maize, Chilies", icon: <FaShoppingBag /> },
];

const ProductTypesSection = () => {
  return (
    <section
      className="bg-green-50 dark:bg-gray-900 py-12 px-4 md:px-16 text-green-900 dark:text-green-200 transition-colors duration-500"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 dark:text-green-400 mb-4">
          Explore Our Product Types
        </h2>
        <p className="text-md sm:text-lg text-green-700 dark:text-gray-200">
          Shop our sustainable offerings: Kitchen Garden Kits, Organic Spices,
          Ice Apple Juice, Multi-Grain Flour, and Health Supplements. Bulk
          supply available for jute, maize, and chilies.
        </p>
      </div>

      <div className="overflow-hidden">
        <Marquee
          pauseOnHover className="[--duration:20s]"
        >
          <div className="flex gap-6 w-max">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex flex-col items-center text-center hover:scale-105 hover:shadow-lg transition duration-300 min-w-[150px]"
              >
                <div className="text-green-600 dark:text-green-400 text-3xl mb-3">
                  {product.icon}
                </div>
                <p className="text-sm font-semibold text-green-800 dark:text-green-200">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <a
          href="/products"
          className="inline-block px-6 py-3 bg-green-600 dark:bg-green-700 text-white rounded-full shadow-md hover:bg-green-700 dark:hover:bg-green-800 transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default ProductTypesSection;

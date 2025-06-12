// --- FILE: src/pages/About.jsx ---
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-6xl mx-auto mt-14">
        <h2 className="text-4xl font-bold text-center text-green-500 mb-4">
          Pioneering Sustainable Agri-Food Systems
        </h2>
        <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Plantosphere Pvt. Ltd. blends innovation and community empowerment.
        </p>

        <div className="space-y-10">
          <div>
            <p className="text-gray-500 dark:text-gray-300 text-lg leading-relaxed font-semibold font-serif">
              Plantosphere Private Limited is a registered agribusiness startup
              revolutionizing India's agriculture and food processing sectors.
              We combine innovation, research, and community engagement to
              deliver sustainable solutions.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-green-700 dark:text-green-600 mb-2">
              Mission
            </h3>
            <p className="text-gray-400 leading-relaxed text-md">
              Empowering farmers, entrepreneurs, and communities by harnessing
              the power of technology, sharing practical knowledge, and
              providing seamless access to sustainable markets — fostering
              growth, resilience, and prosperity at the grassroots level.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-green-700 dark:text-green-600 mb-2">
              Vision
            </h3>
            <p className="text-gray-400 leading-relaxed text-md">
              Fostering a sustainable agri-food ecosystem powered by
              cutting-edge innovation and inclusive collaboration — ensuring
              equitable growth, improved livelihoods, and a healthier planet
              through responsible agriculture and empowered communities.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-green-700 dark:text-green-600 mb-4">
              Core Domains
            </h3>
            <ul className="list-none text-gray-400 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Food Processing & Value Addition",
                "Sustainable Agriculture & Kitchen Garden Design",
                "Landscaping & Urban Greening",
                "Renewable Energy Solutions",
                "Sustainable Packaging & Health Supplements",
                "E-Commerce for Kitchen Garden Kits & Organic Products",
                "Carbon Credit Consulting",
                "Agri-Tourism (Farm Tours & Workshops)",
                "Research & Journal Publication",
                "Vocational Training & Online Certifications",
                "Export-Import & Bulk Raw Material Supply",
                "Government Project Consultancy",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 group relative cursor-default dark:hover:text-green-200 hover:text-green-500 transition-transform hover:scale-102"
                >
                  {/* Leaf Icon with hover scale and color change */}
                  <svg
                    className="w-5 h-5 text-green-500 transition-transform  duration-300 group-hover:text-green-700 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.5 2a5.5 5.5 0 015.473 5.987c-.106 2.236-1.243 4.197-2.782 5.657l-.002.002a15.84 15.84 0 01-1.536 1.424c-.497.394-1.028.715-1.58.959a5.5 5.5 0 01-.573-12.03z" />
                  </svg>

                  {/* List item text */}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-green-700 dark:text-green-600 mb-4">
              Our Journey
            </h3>
            <ul className="space-y-4 border-l-2 border-green-400 pl-4">
              <li>
                <p className="font-medium text-green-600">
                  2021 - Foundation of Plantosphere
                </p>
                <p className="text-sm text-gray-400">
                  Initiated with the goal of bridging gaps in food processing
                  support and market access.
                </p>
              </li>
              <li>
                <p className="font-medium text-green-600">
                  2022 - First Product Line Launch
                </p>
                <p className="text-sm text-gray-400">
                  Launched Ice Apple Juice and turmeric-based health products.
                </p>
              </li>
              <li>
                <p className="font-medium text-green-600">
                  2023 - Training Division Established
                </p>
                <p className="text-sm text-gray-400">
                  Introduced hands-on workshops and agri-entrepreneur programs.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

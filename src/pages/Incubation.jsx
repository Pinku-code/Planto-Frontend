// --- FILE: src/pages/Incubation.jsx ---
import Header from "../components/Header";
import Footer from "../components/Footer";
import CISHLogo from "../assets/CISH.png";

export default function Incubation() {
  return (
    <>
      <Header />
      <section className="bg-green-50 py-16 px-6 mt-14">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Incubation at Plantosphere</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            In collaboration with <strong>CISH (Central Institute for Subtropical Horticulture)</strong>, we support agri-innovators and startups through incubation services that transform ideas into scalable businesses.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={CISHLogo} alt="CISH Logo" className="w-64 mx-auto" />
          <div>
            <h3 className="text-2xl font-semibold mb-2">Our Incubation Partner</h3>
            <p className="text-gray-700">
              CISH provides institutional support, research access, and deep domain expertise to foster innovation in agri-businesses. Their commitment to empowering rural entrepreneurship aligns with our mission.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10">Incubation Support We Offer</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              "Innovation Lab Access",
              "Technical Mentorship",
              "Funding & Grants Support",
              "Market Access",
              "Business Model Validation",
              "Collaboration Opportunities",
            ].map((item, i) => (
              <div key={i} className="p-6 border rounded-lg shadow hover:shadow-md transition">
                <h4 className="text-xl font-semibold mb-2">{item}</h4>
                <p className="text-gray-600">
                  {item === "Innovation Lab Access"
                    ? "State-of-the-art labs to prototype and test your products."
                    : item === "Technical Mentorship"
                    ? "Guidance from domain experts in agriculture and food tech."
                    : item === "Funding & Grants Support"
                    ? "Connect with government schemes and startup funds."
                    : item === "Market Access"
                    ? "We help validate and connect your product to real markets."
                    : item === "Business Model Validation"
                    ? "Iterate and refine your go-to-market strategy."
                    : "Collaborate with institutions, mentors, and peers."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-green-100 text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to Build Your Agri-Startup?</h3>
        <p className="mb-6">Apply now or schedule a consultation to learn more.</p>
        <a
          href="/contact"
          className="bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition"
        >
          Apply for Incubation
        </a>
      </section>

      <Footer />
    </>
  );
}

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getCaseStudies } from "../lib/api";

const CaseStudiesPage = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const data = await getCaseStudies();
        setCaseStudies(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch case studies. Please try again later.");
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 mt-14">
        {/* Header */}
        <div className="bg-white dark:bg-black py-12 text-center">
          <h1 className="text-4xl font-bold text-green-800 dark:text-green-500">Case Studies</h1>
          <p className="text-lg mt-2 text-green-700 dark:text-gray-200">
            Transforming Lives, One Project at a Time
          </p>
        </div>

        {/* Case Studies */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          {loading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading case studies...</p>
            </div>
          ) : error ? (
            <div className="text-center text-red-600">
              <p>{error}</p>
            </div>
          ) : caseStudies.length === 0 ? (
            <div className="text-center text-gray-600">
              <p>No case studies available at the moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-green-800 dark:text-green-500">{study.title}</h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-200">{study.description}</p>
                    <div className="mt-4 text-gray-600 dark:text-gray-300">
                      <p className="font-medium">Outcome:</p>
                      <p>{study.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Buttons */}
          <div className="mt-12 text-center">
            <a
              href="/case-studies/all"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 mr-4"
            >
              View All Case Studies
            </a>
            <a
              href="/collaborate"
              className="inline-block bg-white text-green-700 border border-green-600 px-6 py-3 rounded hover:bg-green-50"
            >
              Partner with Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudiesPage;

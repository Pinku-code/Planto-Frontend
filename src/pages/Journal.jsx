import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Separator } from "../components/ui/separator";
import { getJournals } from "../lib/api";

const JournalPage = () => {
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const data = await getJournals();
        setJournals(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch journal articles. Please try again later.");
        setLoading(false);
      }
    };

    fetchJournals();
  }, []);

  // Get the most recent journal as featured article
  const featuredArticle = journals.length > 0 ? journals[0] : null;

  return (
    <>
      <Header />
      <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-300 mt-14">
        {/* Header */}
        <div className="bg-white dark:bg-gray-900 dark:text-gray-300 py-12 text-center">
          <h1 className="text-4xl font-bold text-green-800 dark:text-green-600">
            Plantosphere Journal of Agri-Food Innovation
          </h1>
          <p className="text-lg mt-2 text-green-700 dark:text-gray-300">
            A peer-reviewed platform for cutting-edge research.
          </p>
        </div>

        <Separator />

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading journal articles...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-600 py-12">
            <p>{error}</p>
          </div>
        ) : journals.length === 0 ? (
          <div className="text-center text-gray-600 py-12">
            <p>No journal articles available at the moment.</p>
          </div>
        ) : (
          <>
            {/* Featured Article */}
            <div className="max-w-5xl mx-auto px-4 py-12">
              <h2 className="text-2xl font-semibold mb-6 text-green-900 dark:text-green-600">Featured Article</h2>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md flex flex-col md:flex-row items-start gap-6">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full md:w-1/3 rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-500">
                    {featuredArticle.title}
                  </h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {featuredArticle.content.substring(0, 200)}...
                  </p>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    By {featuredArticle.author.username} | {new Date(featuredArticle.created_at).toLocaleDateString()}
                  </div>
                  <a
                    href={`/journal/${featuredArticle.id}`}
                    className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </div>

            <Separator />

            {/* Submission Section */}
            <div className="bg-green-50 dark:bg-gray-800 py-12 px-4 text-center">
              <h2 className="text-2xl font-bold text-green-800 dark:text-green-500 mb-4">Submit Your Research</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Submit your article (1,500–2,500 words) in PDF or Word format to be reviewed by our expert editorial board.
              </p>
              <a
                href="/submit"
                className="inline-block bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800"
              >
                Submit Now
              </a>
              <p className="mt-3 text-sm text-green-700 italic">Win ₹5,000 for the best article!</p>
            </div>

            <Separator />

            {/* Archive */}
            <div className="max-w-5xl mx-auto px-4 py-12">
              <h2 className="text-2xl font-semibold mb-6 text-green-900 dark:text-green-500">Archives</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {journals.slice(1).map((journal) => (
                  <div key={journal.id} className="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow hover:shadow-lg transition">
                    <h3 className="font-semibold text-green-700 dark:text-green-500">{journal.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {journal.content.substring(0, 100)}...
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      By {journal.author.username} | {new Date(journal.created_at).toLocaleDateString()}
                    </div>
                    <a
                      href={`/journal/${journal.id}`}
                      className="inline-block mt-3 text-green-600 font-medium hover:underline"
                    >
                      Read Article
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Editorial Board */}
            <div className="bg-gray-100 dark:bg-gray-900 py-12 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-green-900 dark:text-green-500 mb-4">Editorial Board</h2>
                <p className="text-gray-700 dark:text-gray-100 mb-2">
                  <strong className="text-blue-300">Chief Editor:</strong> Ozair Alam
                </p>
                <p className="text-gray-700 dark:text-gray-100 mb-2">
                  <strong className="text-blue-300">Associate Editors:</strong> Dr. [Name] (ICAR Scientist), Prof. [Name] (Food Tech Expert)
                </p>
                <p className="text-gray-700 dark:text-gray-100">
                  <strong className="text-blue-300">Review Committee:</strong> Experts in agriculture, sustainability, food tech.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <Separator />
      <Footer />
    </>
  );
};

export default JournalPage;

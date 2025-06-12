// --- FILE: src/pages/Blog.jsx ---
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getBlogPosts } from "../lib/api";

const categories = [
  "All",
  "Agri-Food Innovations",
  "Farmer Success Stories",
  "Kitchen Gardening Tips",
  "Policy & Sustainability",
];

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getBlogPosts();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blog posts. Please try again later.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-7xl mx-auto mt-14">
        <h2 className="text-4xl font-bold text-center text-green-700 dark:text-green-500 mb-2">
          Insights, Stories, and Innovations
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-200 mb-10">
          Stay informed with our journey and trends.
        </p>

        {/* Search Bar */}
        <div className="mb-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-sm rounded-full border ${
                selectedCategory === cat
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-700 border-green-600"
              } hover:bg-green-700 hover:text-white transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog posts...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-600">
            <p>{error}</p>
          </div>
        ) : (
          <>
            {/* Articles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-xs text-green-700 dark:text-green-500 font-medium mb-1 uppercase">
                        {post.category || "Uncategorized"}
                      </p>
                      <h3 className="font-semibold text-lg mb-2 text-green-900 dark:text-green-600">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">
                        {post.content.substring(0, 150)}...
                      </p>
                      <div className="text-xs text-gray-500 dark:text-gray-200 mb-4">
                        By {post.author.username} — {new Date(post.created_at).toLocaleDateString()}
                      </div>
                      <a
                        href={`/blog/${post.id}`}
                        className="inline-block text-green-600 font-semibold text-sm hover:underline"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 dark:text-gray-200 col-span-full">
                  No blog posts found.
                </p>
              )}
            </div>

            {/* Newsletter CTA */}
            <div className="bg-green-50 dark:bg-gray-900 py-12 px-6 rounded-lg text-center shadow max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-green-800 dark:text-green-500 mb-2">
                Stay Updated with Our Latest Posts
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-6">
                Subscribe to our newsletter for updates on sustainability, agri-entrepreneurship, and training.
              </p>
              <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white dark:text-gray-200 rounded-md hover:bg-green-700 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
}

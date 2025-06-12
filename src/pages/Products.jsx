// --- FILE: src/pages/Products.jsx ---
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Separator } from "../components/ui/separator";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products/");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-green-700 dark:text-green-500 mb-2">
            Our Products
          </h1>
          <p className="text-center text-lg text-gray-600 dark:text-gray-200 mb-10">
            Discover our range of sustainable agricultural products
          </p>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading products...</p>
            </div>
          ) : error ? (
            <div className="text-center text-red-600 py-12">
              <p>{error}</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center text-gray-600 py-12">
              <p>No products available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-green-600 dark:text-green-400 font-semibold mb-4">
                      ₹{product.price}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;

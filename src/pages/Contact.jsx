// --- FILE: src/pages/Contact.jsx ---
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // await axios.post("http://localhost:8000/api/contact/", formData);
      await axios.post("https://planto-backend.onrender.com/api/contact/", formData);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section className="py-16 px-6 max-w-3xl mx-auto mt-14">
        <h2 className="text-4xl font-bold text-center text-green-700 dark:text-green-500 mb-2">
          Let's Grow Together
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-200 mb-10">
          Reach out for inquiries or partnerships.
        </p>

        {success && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91-XXXXXXXXXX"
              className="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Inquiry Type</label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-green-500 focus:border-green-500"
              required
            >
              <option value="">Select...</option>
              <option value="Services">Services</option>
              <option value="Products">Products</option>
              <option value="Journal">Journal</option>
              <option value="Training">Training</option>
              <option value="Collaboration">Collaboration</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              className="mt-1 block w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-green-500 focus:border-green-500"
              required
            ></textarea>
          </div>

          {/* CAPTCHA placeholder */}
          <div className="flex items-center">
            <input type="checkbox" required className="mr-2" />
            <label className="text-sm text-gray-600 dark:text-gray-200">I'm not a robot (CAPTCHA)</label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Contact Info */}
        <div className="text-center mt-10 text-gray-600 dark:text-gray-200 text-sm space-y-2">
          <p>
            Or email us directly at{" "}
            <a
              href="mailto:connect@plantosphere.in"
              className="text-green-700 font-medium hover:underline"
            >
              connect@plantosphere.in
            </a>
          </p>
          <p>Phone: +91-XXXXXXXXXX</p>
          <p>Address: [City], West Bengal, India</p>
          <p>CIN: [Insert CIN]</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

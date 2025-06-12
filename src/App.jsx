// --- FILE: src/App.jsx ---
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Services from "./pages/Services";
import TrainingEvents from "./pages/TrainingEvents";
import Blog from "./pages/Blog";
import Journal from "./pages/Journal";
import CaseStudies from "./pages/CaseStudies";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Collaborate from "./pages/Collaborate";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PlantLoader from "./components/plantloader";
import { useLocation } from "react-router-dom";
import { initGA, trackPageview } from "./lib/analytics";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    initGA();
    trackPageview(location.pathname);
  }, [location]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <PlantLoader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/training" element={<TrainingEvents />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/collaborate" element={<Collaborate />} />
      </Routes>
    </>
  );
}

export default App;

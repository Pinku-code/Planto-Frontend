
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Training from "./pages/TrainingEvents";	
import Blog from "./pages/Blog";
import Journal from "./pages/Journal";
import CaseStudiesPage from "./pages/CaseStudies";
import CollaboratePage from "./pages/Collaborate";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Plantos from "./pages/Plantos";

const RoutesConfig = () => (
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Services />} />
      <Route path="/training" element={<Training />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/collaborate" element={<CollaboratePage />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/plantos" element={<Plantos />} />
      {/* Add more routes as pages are created */}
    </Routes>
);

export default RoutesConfig;

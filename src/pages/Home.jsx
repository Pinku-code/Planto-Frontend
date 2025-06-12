import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import AboutSection from "../components/About_the_company";
import ProductTypesSection from "../components/Product_types";
import AboutUsSection from "../components/About_us";
import ServicesSection from "../components/Services";
import TrainingCoursesSection from "../components/Training_and_courses";
import JournalSection from "../components/Journal";
import BlogSection from "../components/Blog";
import TeamSection from "../components/Team";
import CollaborationSection from "../components/Collaboration";
import ContactSection from "../components/Contact";
import KeyStats from "../components/Key_stats";
import { Separator } from "../components/ui/separator"

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-green-900">
      <Header />
      <Separator/>
      <HeroSection />
      <Separator/>
      <AboutSection />
      <Separator/>
      <ProductTypesSection />
      <Separator/>
      <AboutUsSection />
      <Separator/>
      <ServicesSection />
      <Separator/>
      <TrainingCoursesSection />
      <Separator/>
      <JournalSection />
      <Separator/>
      <BlogSection />
      <Separator/>
      <TeamSection />
      <Separator/>
      <CollaborationSection/>
      <Separator/>
      <ContactSection/>
      <Separator/>
      <KeyStats/>
      <Separator/>
      <Footer />
    </div>
  );
}
import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import ServicesShowcase from './components/ServicesShowcase';
import FeatureSections from './components/FeatureSections';
import CaseStudies from './components/CaseStudies';
import GlobalPresence from './components/GlobalPresence';
import ROIPromise from './components/ROIPromise';
import ProcessSection from './components/ProcessSection';
import CreatingAbundance from './components/CreatingAbundance';
import BlogSection from './components/BlogSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ClientLogos />
      <ServicesShowcase />
      <FeatureSections />
      <CaseStudies />
      <GlobalPresence />
      <ROIPromise />
      <ProcessSection />
      <CreatingAbundance />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
}

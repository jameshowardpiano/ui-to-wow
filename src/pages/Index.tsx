
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PopularServices from "@/components/PopularServices";
import Experts from "@/components/Experts";
import Reviews from "@/components/Reviews";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <PopularServices />
      <Experts />
      <Reviews />
      <Features />
      <CTA />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;

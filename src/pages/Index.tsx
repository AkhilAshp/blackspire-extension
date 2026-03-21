import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Process from "@/components/Process";
import Outcome from "@/components/Outcome";
import Scarcity from "@/components/Scarcity";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Problem />
    <Solution />
    <Process />
    <Outcome />
    <Scarcity />
    <CTA />
    <ContactForm />
    <Footer />
  </div>
);

export default Index;

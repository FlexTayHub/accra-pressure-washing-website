import { Toaster } from "@/components/ui/toaster";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import ServiceAreas from "./components/ServiceAreas";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

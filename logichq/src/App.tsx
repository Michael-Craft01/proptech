import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AtWork from './components/AtWork';
import ClientLogos from './components/ClientLogos';
import Challenges from './components/Challenges';
import Solutions from './components/Solutions';
import PropertyShowcase from './components/PropertyShowcase';
import Services from './components/Services';
import Process from './components/Process';
import Technology from './components/Technology';
import Results from './components/Results';
import Founder from './components/Founder';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <AtWork />
        <ClientLogos />
        <Challenges />
        <Solutions />
        <PropertyShowcase />
        <Services />
        <Process />
        <Technology />
        <Results />
        <Founder />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

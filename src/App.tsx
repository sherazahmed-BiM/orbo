import Header from './components/Header';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';
import WhyChooseUs from './components/WhyChooseUs';
import Features from './components/Features';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Comparison from './components/Comparison';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="testimonials">
        <Testimonial />
      </section>
      <section id="benefits">
        <WhyChooseUs />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="updates">
        <Testimonials />
      </section>
      <section id="comparison">
        <Comparison />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="contact">
        <FAQ />
      </section>
      <Footer />
    </div>
  );
}

export default App;

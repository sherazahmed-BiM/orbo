import Header from './components/Header';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';
import WhyChooseUs from './components/WhyChooseUs';
import Features from './components/Features';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Testimonial />
      <WhyChooseUs />
      <Features />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
    </div>
  );
}

export default App;

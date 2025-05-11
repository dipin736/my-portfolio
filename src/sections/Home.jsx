import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Experience from '../components/Experience';

const Home = () => {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Experience/>
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
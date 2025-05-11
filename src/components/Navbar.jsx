import { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.from('.nav-item', {
      y: -20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      delay: 0.2
    });
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects','experience', 'skills', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-md z-50 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="text-2xl font-bold text-white hover:text-blue-400 transition-colors nav-item"
        >
          Dipin
        </a>

        <div className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`nav-item relative ${activeSection === item.id ? 'text-blue-400' : 'text-white hover:text-blue-300'} transition-colors`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0'}`}></span>
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-white nav-item"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'} overflow-hidden transition-all duration-300`}>
        <div className="flex flex-col space-y-4 pt-4">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`text-lg ${activeSection === item.id ? 'text-blue-400' : 'text-white'} hover:text-blue-300 transition-colors`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
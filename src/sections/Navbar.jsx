import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Button } from './Hero';



export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navbarRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
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
  
    const navItems = [
     
   
    ];
  
    return (
      <nav 
        ref={navbarRef}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-gray-900/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-5 md:px-20">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              Dipin
            </a>
  
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="text-white hover:text-blue-400 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
           
            </div>
  
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
  
          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'max-h-96 pt-4' : 'max-h-0'
            }`}
          >
            <div className="flex flex-col space-y-4 pb-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <Button 
                  text="Contact Me" 
                  className="w-full h-12"
                  id="contact"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
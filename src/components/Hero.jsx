import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';

const Hero = () => {
  const container = useRef();
  const words = ["Designs", "Ideas", "Solutions"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useGSAP(() => {
    // Title animation
    gsap.from(".hero-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2
    });

    // Word cycling animation
    const tl = gsap.timeline({ repeat: -1 });
    words.forEach((word, i) => {
      tl.to(".changing-word", {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => setCurrentWordIndex(i)
      })
      .to(".changing-word", {
        opacity: 1,
        y: 0,
        duration: 0.5
      })
      .addPause(2);
    });

    // Image animation
    gsap.from(".profile-image", {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
      delay: 0.5
    });

    // Floating animation
    gsap.to(".profile-image", {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Button animation
    gsap.from(".cta-button", {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "elastic.out(1, 0.5)"
    });

  }, { scope: container });

  return (
    <section
    ref={container}
    id="home"
    className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden pt-20"
  >
    <div className="absolute inset-0 flex items-center">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-500 mix-blend-screen"></div>
        <div className="absolute bottom-40 right-32 w-60 h-60 rounded-full bg-purple-500 mix-blend-screen"></div>
      </div>
    </div>

    <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10 py-20">
      <div className="flex flex-col md:flex-row items-center w-full"> {/* Flex row for side-by-side */}
        {/* Text content (Left side) */}
        <div className="text-white md:w-1/2 pr-10 mb-10 md:mb-0"> {/* Added padding and margin */}
          <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6">
            Turning <span className="changing-word text-blue-400 inline-block min-w-[100px]">
              {words[currentWordIndex]}
            </span>
          </h1>
          <h2 className="hero-title text-5xl md:text-6xl font-bold mb-6">into Projects</h2>
          <h3 className="hero-title text-5xl md:text-6xl font-bold mb-8">that Get Results</h3>

          <p className="hero-title text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl">
            Hi, I'm Dipin, a full-stack developer with a passion for writing clean and effective code.
          </p>

          <button
            className="cta-button px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-bold transition-colors duration-300 transform hover:scale-105"
            onClick={() => {
              const projects = document.getElementById('projects');
              if (projects) {
                window.scrollTo({
                  top: projects.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
          >
            SEE MY WORK
          </button>
        </div>

        {/* Profile image (Right side, full width on mobile) */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end"> {/* Full width on mobile */}
          <div className="profile-image relative w-64 h-64 md:w-full md:h-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"> {/* Added rounded-full back */}
            <img
              src="/images/IMGC.jpeg"
              alt="Dipin"
              className="w-full h-full object-cover rounded-full" 
            />
            {/* Decorative pulse effect (adjust as needed for full width) */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-400 opacity-0 animate-ping-slow"></div> {/* Added rounded-full back */}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
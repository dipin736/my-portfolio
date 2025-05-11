import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  // Back-End
  { name: "Python", level: 90 },
  { name: "Django (DRF)", level: 85 },

  // Front-End
  { name: "HTML", level: 95 },
  { name: "CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "Angular (Material, RxJS)", level: 85 },
  { name: "React (Redux)", level: 85 },

  // Database
  { name: "MySQL", level: 85 },
  { name: "MongoDB", level: 80 },

  // Version Control
  { name: "Git", level: 90 },
];

const Skills = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".skill-item", {
      x: -50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#skills",
        start: "top 80%"
      }
    });

    gsap.from(".skill-bar", {
      width: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#skills",
        start: "top 70%"
      }
    });
  }, { scope: container });

  return (
    <section id="skills" ref={container} className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">My Skills</h2>
        <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          Here are the technologies and tools I work with on a regular basis.
        </p>

        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="skill-bar h-full bg-blue-600 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

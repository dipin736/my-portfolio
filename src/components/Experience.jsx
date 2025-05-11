import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const experiences = [
  {
    company: "Scalino Technologies",
    position: "Junior Software Developer",
    duration: "Mar 2024 – Present",
    description: [
      "Launched a ReactJS project (Contract Genius), integrating 10+ APIs.",
      "Participated in training focused on ReactJS and Python.",
      "Collaborated with backend teams for seamless integration.",
      "Interacted with clients for requirements and updates.",
      "Currently transitioning to a React-based project."
    ],
    skills: ["ReactJS", "Python", "API Integration"]
  },
  {
    company: "A and D Info Solutions LLP",
    position: "Angular Developer",
    duration: "Mar 2024 – Nov 2024",
    description: [
      "Worked on BUILDEXE - Construction Management Software using Angular.",
      "Collaborated with teams to meet all deadlines.",
      "Integrated frontend with backend, improving performance.",
      "Tested and debugged code, reducing issues significantly."
    ],
    skills: ["Angular", "JavaScript", "HTML", "CSS"]
  },
  {
    company: "Quest Innovative Solutions Pvt. Ltd",
    position: "Software Engineer Trainee",
    duration: "2023",
    description: [
      "Built backend solutions using Python, Django, and Flask.",
      "Created frontend interfaces with Angular and JavaScript.",
      "Handled full-stack development for a personal project.",
      "Completed training in Django and Angular."
    ],
    skills: ["Python", "Django", "Flask", "Angular"]
  }
];


const Experience = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".experience-item", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: "#experience",
        start: "top 80%"
      }
    });

    gsap.from(".timeline-dot", {
      scale: 0,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#experience",
        start: "top 80%"
      }
    });
  }, { scope: container });

  return (
    <section id="experience" ref={container} className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Work Experience</h2>
        <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          My professional journey and the companies I've worked with.
        </p>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-800 transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`experience-item mb-12 relative ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                    <span className="text-blue-400 text-sm">{exp.duration}</span>
                  </div>
                  <h4 className="text-lg text-blue-300 mb-4">{exp.company}</h4>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className={`hidden md:block absolute top-6 ${index % 2 === 0 ? 'right-0' : 'left-0'} transform translate-x-1/2 -translate-y-1/2`}>
                <div className="timeline-dot w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-950"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
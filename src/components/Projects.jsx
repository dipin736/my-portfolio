import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const projects = [
  {
    title: "WeConnected — Real-Time Social App",
    description:
      "Constructed a full-stack real-time social platform with chat, stories, posts, and user profiles. Achieved a 98% message delivery rate using Django Channels and reduced deployment time by 50% with Docker.",
    tags: [
      "React",
      "Vite",
      "Material-UI",
      "Django",
      "Django Channels",
      "Docker",
      "JWT"
    ],
    image: "/images/Screenshot 2025-05-11 182439.png",
    link: "https://weconnected.netlify.app/login"
  },
  {
    title: "Game Store (Full-Stack Web Application)",
    description:
      "Built a full-stack platform for browsing, purchasing, and reviewing games. Included secure JWT-based authentication and optimized REST APIs to handle over 50 game listings and 10+ users.",
    tags: ["React", "Django REST", "Chakra UI", "JWT", "MySQL", "Git"],
    image: "/images/Screenshot 2025-05-11 182729.png",
      link: "https://gamestore-ce62.onrender.com/"
  },
  {
    title: "Online Bookstore Management",
    description:
      "Developed a Django-based web app for managing books, users, and orders with Razorpay integration, processing 20+ transactions and improving user retention by 30%.",
    tags: ["Django", "HTML", "CSS", "JavaScript", "Bootstrap", "Razorpay"],
    image: "/images/Screenshot 2023-12-21 121603.png",
    link: "https://github.com/dipin736/Book-Store-Management-Django"
  }
];


const Projects = () => {
  const container = useRef();

  useGSAP(() => {
    // Animate the whole section heading and paragraph
    gsap.from("#projects .section-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  
    // Animate each project card with stagger
    gsap.from("#projects .project-item", {
      y: 80,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: container });
  
  return (
    <section id="projects" ref={container} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          My Projects
        </h2>
        <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          Here are some of my recent works that showcase my skills and
          experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-item bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import ScrollFadeIn from "./ScrollFadeIn";

const projects = [
  {
    title: "CodeHuddle - A Remote Coding Interview Platform",
    description:
      "Backend for a remote coding interview platform with JWT auth, role-based access control, and scalable REST APIs for interview and problem management.",
    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT & OAuth",
      "Joi Validation",
      "StreamAPI",
    ],
    githubLink:
      "https://github.com/Vivek954sahu/CodeHuddle-Remote_Coding_Interview_Platform",
    liveLink: "",
    hoverHue: 230,
  },
  {
    title: "KnowShare - A Collaborative Knowledge Sharing Platform",
    description:
      "Collaborative content platform with secure authentication, modular APIs, and real-time interactions using WebSockets.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
    ],
    githubLink: "https://github.com/Vivek954sahu/KnowShare",
    liveLink: "https://know-share.vercel.app/",
    hoverHue: 290,
  },
  {
    title: "Currency Converter App",
    description:
      "A responsive web application that converts currencies in real-time using a public API.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Fetch API"],
    githubLink: "https://github.com/Vivek954sahu/Currency_Converter",
    liveLink: "https://currency-converter-liart-xi.vercel.app/",
    hoverHue: 50,
  },
];

const ProjectCard = ({ project }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <div
      className="h-full"
      style={{ perspective: "800px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="bg-card border border-border rounded-2xl p-6 h-full transition-all duration-200 ease-out"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(${hovered ? 1.03 : 1})`,
          borderColor: hovered
            ? `hsl(${project.hoverHue}, 70%, 55%)`
            : undefined,
          boxShadow: hovered
            ? `0 20px 40px -15px hsl(${project.hoverHue} 70% 50% / 0.25), inset 0 0 60px -30px hsl(${project.hoverHue} 70% 50% / 0.08)`
            : undefined,
          background: hovered
            ? `linear-gradient(145deg, hsl(${project.hoverHue} 70% 50% / 0.06), transparent 60%)`
            : undefined,
        }}
      >
        <div className="w-full h-40 bg-secondary rounded-xl mb-5 flex items-center justify-center overflow-hidden">
          <span className="text-muted-foreground text-sm">Project Preview</span>
        </div>

        <h3 className={`text-lg font-bold text-foreground mb-2`}>
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <div></div>

        <div className="flex gap-3">
          <a
            href={project.liveLink}
            className="flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-60 transition-opacity"
          >
            <FiExternalLink size={14} /> Live
          </a>

          <a
            href={project.githubLink}
            className="flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-60"
          >
            <FiGithub size={14} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 gradient-bg rounded mb-10" />
        </ScrollFadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ScrollFadeIn key={project.title} delay={0.1 * idx}>
              <ProjectCard project={project} />
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

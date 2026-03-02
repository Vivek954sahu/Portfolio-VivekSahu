import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import ScrollFadeIn from "./ScrollFadeIn";
import ProfilePic from "../assets/VivekSahuProfilePic.jpg";

const skills = {
  Frontend: [
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  ],
  Backend: [
    { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
    { name: "Express.js", icon: SiExpress, color: "#888" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  ],
  Tools: [
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#aaa" },
    { name: "VS Code", icon: VscCode, color: "#007ACC" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Vercel", icon: SiVercel, color: "#aaa" },
  ],
};

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-16 h-1 gradient-bg rounded mb-10" />
        </ScrollFadeIn>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
          {/* Profile Photo + Bio */}
          <ScrollFadeIn delay={0.2}>
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="relative">
                <div className="w-44 h-44 rounded-full gradient-bg p-1">
                  <img
                    src={ProfilePic}
                    alt="Vivek Sahu Profile pic"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-center md:text-left font-serif">
                <ScrollFadeIn>
                    <p>I’m Vivek Sahu, a software developer specializing in scalable backend systems and secure APIs using Node.js, Express, and MongoDB. I focus on clean architecture, authentication, and building reliable services that perform in real-world environments.</p>
                </ScrollFadeIn>

                <ScrollFadeIn>
                    <p>I’ve developed production-style backend modules including JWT authentication, role-based access control, and RESTful APIs for platforms like a remote coding interview system and a collaborative knowledge platform.</p>
                </ScrollFadeIn>

                <ScrollFadeIn>
                   <p>I’m also expanding into React to build seamless full-stack applications, driven by a passion for solving practical engineering problems and creating robust, user-focused software.</p>
                </ScrollFadeIn>

              </div>
            </div>
          </ScrollFadeIn>

          {/* Skills Section */}
          <ScrollFadeIn delay={0.1}>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items], catIdx) => (
                <ScrollFadeIn key={category} delay={0.15 + catIdx * 0.1}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                    {category}
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {items.map((skill) => (
                      <div
                        key={skill.name}
                        className="bg-card border border-border rounded-xl p-3 flex flex-col items-center gap-2 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group"
                      >
                        <skill.icon
                          size={28}
                          style={{ color: skill.color }}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                        <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;

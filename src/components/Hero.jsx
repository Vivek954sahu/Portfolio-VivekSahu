import Hello from "../assets/Hello.gif";
import ScrollFadeIn from "./ScrollFadeIn";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import DevIllustration from "../assets/Illustration.png";

const socialLinks = [
    { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/vivek-sahu-335258297/" },
    { icon: FaGithub, label: "GitHub", href: "https://github.com/Vivek954sahu" },
    { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/7698238008" }
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollFadeIn>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">
                <img src={Hello} alt="Hello" width="30" />
              </span>
              <span className="text-muted-foreground text-lg">Hi, I'm</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black font-serif mb-3 text-foreground leading-tight">
                Vivek Sahu
            </h1>

            <p className="text-md md:text-2xl font-semibold gradient-text mb-2">
                Backend Developer | MERN Developer
            </p>

            <p className="text-muted-foreground mb-8 max-w-md font-mono">
                Building scalable backend systems with Node.js, Express, and MongoDB while expanding into React to craft seamless user experiences.
            </p>

            <div className="flex gap-4">
                { socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                    key={label} 
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary glow-hover transition-all"
                    >
                        <Icon size={18} />
                    </a>
                ))}
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.3} className="flex justify-center">
            <img
              src={DevIllustration}
              alt="Developer Illustration"
              className="w-full max-w-lg animate-float dark:brightness-110"
            />
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2026 Vivek Sahu. All rights reserved.
        </p>
        <div className="flex gap-4">
          {[
            { icon: FaLinkedinIn, href: "https://linkedin.com/vivek-sahu-335258297" },
            { icon: FaGithub, href: "https://github.com/Vivek954sahu" },
            { icon: FaWhatsapp, href: "https://wa.me/7698238008" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors glow-hover"
            >
              <Icon size={16}  />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

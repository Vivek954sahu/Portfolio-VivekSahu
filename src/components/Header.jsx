import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";
import resume from "../assets/Resume-Vivek-Sahu.pdf"

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, []);

    const handleClick = (href) => {
        setMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }

  return (
    <motion.header
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${scrolled ? "bg-background/40 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"}`}>
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
            {/* Logo */}
            <a href="#home" className="font-mono text-3xl font-bold text-foreground">
                &lt;<span className="gradient-text">Vivek Sahu</span>/&gt;
            </a>

            {/* DeskTop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
                { navLinks.map((link) => (
                    <button
                     key={link.href}
                     onClick={() => handleClick(link.href)}
                     className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium tracking-wide uppercase"
                     >
                        {link.label}
                    </button>
                ))}

                <ThemeToggle />

                <a 
                  href={resume}
                  download
                  className="text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity glow-hover"
                 >
                    Resume
                </a>
            </nav>

            {/* Mobile Menu Navigation */}
            <div className="flex md:hidden items-center gap-3">
                <ThemeToggle />

                <button 
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-foreground text-2xl"
                  >
                    { menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} /> }
                </button>
            </div>
        </div>

        <AnimatePresence>
            { menuOpen && (
                <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="md:hidden bg-background/75 backdrop-blur-md border-b border-border overflow-hidden"
                >
                    <div className="flex flex-col items-center gap-4 py-6">
                        { navLinks.map((link) => (
                            <button
                            key={link.href}
                            onClick={() => handleClick(link.href)}
                            className="text-foreground hover:text-muted-foreground transition-colors text-sm font-medium uppercase"
                            >
                                { link.label}
                            </button>
                        ))}

                        <a 
                          href={resume}
                          download
                          className="text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity glow"
                          >
                            Resume
                        </a>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    </motion.header>
  )
}

export default Header

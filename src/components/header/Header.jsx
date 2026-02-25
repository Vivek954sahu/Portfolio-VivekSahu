import { useState } from "react"
import { Container } from "./styles";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [light, setLight] = useState(false);

    function toogleTheme() {
        setLight((v) => !v);
        document.documentElement.classList.toggle("light");
    };

    function scrollToView(id) {
        setMenuOpen(false);
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

  return (
    <Container className="header-fixed">
       <button className="logo" onClick={() => scrollToView("home")}>
        {"<Vivek Sahu/>"}
       </button>

       <button className="theme-toggle" onClick={toogleTheme} aria-label="Toggle Theme">
        {light ? "🌞" : "🌙"}
       </button>

       <nav className={menuOpen ? "active" : ""}>
        <button onClick={() => scrollToView("home")}>Home</button>
        <button onClick={() => scrollToView("about")}>About Me</button>
        <button onClick={() => scrollToView("project")}>Projects</button>
        <button onClick={() => scrollToView("contact")}>Contact</button>

        <a href="{Resume}" download className="button">Resume</a>
       </nav>

       <button
        className={`menu ${menuOpen ? "active" : ""}`}
        aria-expanded={menuOpen}
        aria-label="Menu"
        onClick={() => setMenuOpen((v) => !v)}
        />

    </Container>
  )
}

export default Header

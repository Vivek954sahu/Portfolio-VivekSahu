import About from "./components/About";
import Contact from "./components/Contact";
import FloatingIcons from "./components/FloatingIcons";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingIcons />
      <Header />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

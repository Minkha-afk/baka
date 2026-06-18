import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Closing from "./components/Closing";

export default function Home() {
  return (
    <>
      {/* Ambient background */}
      <div className="page-aurora" aria-hidden="true" />
      <div className="page-grid" aria-hidden="true" />

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Closing />
      </main>
    </>
  );
}

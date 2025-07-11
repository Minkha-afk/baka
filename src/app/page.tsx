"use client";
import ThreeBackground from "./components/ThreeBackground";
import FloatingElements from "./components/FloatingElements";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ScrollIndicator from "./components/ScrollIndicator";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Hide scroll indicator after scrolling
    const onScroll = () => {
      const scrollIndicator = document.querySelector(".scrollIndicator") as HTMLElement;
      if (scrollIndicator) {
        scrollIndicator.style.opacity = window.scrollY > 100 ? "0" : "1";
      }
    };
    window.addEventListener("scroll", onScroll);
    // Loading fade-in
    document.body.style.opacity = "0";
    setTimeout(() => {
      document.body.style.transition = "opacity 0.8s ease-in-out";
      document.body.style.opacity = "1";
    }, 100);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="cyber-grid"></div>
      <ThreeBackground />
      <FloatingElements />
      <div className="container">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Education />
      </div>
      <ScrollIndicator />
    </>
  );
}

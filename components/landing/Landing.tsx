"use client";

import ScrollProgress from "../ui/ScrollProgress";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import About from "../about/About";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Experience from "../experience/Experience";
import Education from "../education/Education";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Chatbot from "../chatbot/Chatbot";


export default function Landing() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />

        <Projects />

        <Skills />

        <Experience />

        <Education />

        <Chatbot />

        <Contact />

      </main>

      <Footer />


    </>
  );
}
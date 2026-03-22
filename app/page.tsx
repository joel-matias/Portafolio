"use client";

import { useState } from "react";
import { IntroAnimation } from "@/components/IntroAnimation";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <CustomCursor />

      {showIntro && (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      )}

      {!showIntro && (
        <div
          style={{
            animation: "pageFadeIn 0.4s ease forwards",
          }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      )}

      <style>{`
        @keyframes pageFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </>
  );
}
